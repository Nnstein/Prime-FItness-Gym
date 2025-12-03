/**
 * A utility class for lazy initialization of services or expensive objects.
 * Prevents startup crashes by deferring initialization until the value is actually needed.
 * 
 * @example
 * const myService = new Lazy(() => new HeavyService());
 * // Service is not initialized yet
 * 
 * const instance = myService.value; // Initializes now
 */
export class Lazy<T> {
    private _value: T | null = null;
    private _error: Error | null = null;
    private _initialized = false;

    constructor(private readonly factory: () => T) { }

    /**
     * Gets the initialized value.
     * Throws an error if initialization fails.
     */
    get value(): T {
        if (this._initialized) {
            if (this._error) {
                throw this._error;
            }
            return this._value!;
        }

        try {
            this._value = this.factory();
            this._initialized = true;
            return this._value;
        } catch (error) {
            this._error = error instanceof Error ? error : new Error(String(error));
            this._initialized = true;
            console.error("Lazy initialization failed:", this._error);
            throw this._error;
        }
    }

    /**
     * Returns true if the value has been initialized (successfully or not).
     */
    get isInitialized(): boolean {
        return this._initialized;
    }

    /**
     * Resets the lazy instance, allowing re-initialization on next access.
     */
    reset(): void {
        this._value = null;
        this._error = null;
        this._initialized = false;
    }
}

/**
 * Helper to create a lazy value.
 */
export function lazy<T>(factory: () => T): Lazy<T> {
    return new Lazy(factory);
}
