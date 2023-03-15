
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string | null
  email: string
  name: string
  birth: Date
  phone: string | null
  password: string
  createdAt: Date
}

/**
 * Model Server
 * 
 */
export type Server = {
  id: string
  name: string
  discord_channel: string
  contact: string | null
  description: string | null
  logo: string | null
  createdAt: Date
}

/**
 * Model ServerTags
 * 
 */
export type ServerTags = {
  id: string
  name: string
  serverId: string | null
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.server`: Exposes CRUD operations for the **Server** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.server.findMany()
    * ```
    */
  get server(): Prisma.ServerDelegate<GlobalReject>;

  /**
   * `prisma.serverTags`: Exposes CRUD operations for the **ServerTags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServerTags
    * const serverTags = await prisma.serverTags.findMany()
    * ```
    */
  get serverTags(): Prisma.ServerTagsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Server: 'Server',
    ServerTags: 'ServerTags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ServerCountOutputType
   */


  export type ServerCountOutputType = {
    tags: number
  }

  export type ServerCountOutputTypeSelect = {
    tags?: boolean
  }

  export type ServerCountOutputTypeGetPayload<S extends boolean | null | undefined | ServerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ServerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ServerCountOutputTypeArgs)
    ? ServerCountOutputType 
    : S extends { select: any } & (ServerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ServerCountOutputType ? ServerCountOutputType[P] : never
  } 
      : ServerCountOutputType




  // Custom InputTypes

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ServerCountOutputType
     */
    select?: ServerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    birth: Date | null
    phone: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    birth: Date | null
    phone: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    birth: number
    phone: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    birth?: true
    phone?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    birth?: true
    phone?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    birth?: true
    phone?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string | null
    email: string
    name: string
    birth: Date
    phone: string | null
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    birth?: boolean
    phone?: boolean
    password?: boolean
    createdAt?: boolean
  }


  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
  }



  /**
   * Model Server
   */


  export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  export type ServerMinAggregateOutputType = {
    id: string | null
    name: string | null
    discord_channel: string | null
    contact: string | null
    description: string | null
    logo: string | null
    createdAt: Date | null
  }

  export type ServerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    discord_channel: string | null
    contact: string | null
    description: string | null
    logo: string | null
    createdAt: Date | null
  }

  export type ServerCountAggregateOutputType = {
    id: number
    name: number
    discord_channel: number
    contact: number
    description: number
    logo: number
    createdAt: number
    _all: number
  }


  export type ServerMinAggregateInputType = {
    id?: true
    name?: true
    discord_channel?: true
    contact?: true
    description?: true
    logo?: true
    createdAt?: true
  }

  export type ServerMaxAggregateInputType = {
    id?: true
    name?: true
    discord_channel?: true
    contact?: true
    description?: true
    logo?: true
    createdAt?: true
  }

  export type ServerCountAggregateInputType = {
    id?: true
    name?: true
    discord_channel?: true
    contact?: true
    description?: true
    logo?: true
    createdAt?: true
    _all?: true
  }

  export type ServerAggregateArgs = {
    /**
     * Filter which Server to aggregate.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: Enumerable<ServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerMaxAggregateInputType
  }

  export type GetServerAggregateType<T extends ServerAggregateArgs> = {
        [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer[P]>
      : GetScalarType<T[P], AggregateServer[P]>
  }




  export type ServerGroupByArgs = {
    where?: ServerWhereInput
    orderBy?: Enumerable<ServerOrderByWithAggregationInput>
    by: ServerScalarFieldEnum[]
    having?: ServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerCountAggregateInputType | true
    _min?: ServerMinAggregateInputType
    _max?: ServerMaxAggregateInputType
  }


  export type ServerGroupByOutputType = {
    id: string
    name: string
    discord_channel: string
    contact: string | null
    description: string | null
    logo: string | null
    createdAt: Date
    _count: ServerCountAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  type GetServerGroupByPayload<T extends ServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerGroupByOutputType[P]>
            : GetScalarType<T[P], ServerGroupByOutputType[P]>
        }
      >
    >


  export type ServerSelect = {
    id?: boolean
    name?: boolean
    discord_channel?: boolean
    contact?: boolean
    description?: boolean
    logo?: boolean
    createdAt?: boolean
    tags?: boolean | Server$tagsArgs
    _count?: boolean | ServerCountOutputTypeArgs
  }


  export type ServerInclude = {
    tags?: boolean | Server$tagsArgs
    _count?: boolean | ServerCountOutputTypeArgs
  }

  export type ServerGetPayload<S extends boolean | null | undefined | ServerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Server :
    S extends undefined ? never :
    S extends { include: any } & (ServerArgs | ServerFindManyArgs)
    ? Server  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tags' ? Array < ServerTagsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ServerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ServerArgs | ServerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tags' ? Array < ServerTagsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ServerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Server ? Server[P] : never
  } 
      : Server


  type ServerCountArgs = 
    Omit<ServerFindManyArgs, 'select' | 'include'> & {
      select?: ServerCountAggregateInputType | true
    }

  export interface ServerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Server that matches the filter.
     * @param {ServerFindUniqueArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ServerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Server'> extends True ? Prisma__ServerClient<ServerGetPayload<T>> : Prisma__ServerClient<ServerGetPayload<T> | null, null>

    /**
     * Find one Server that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServerFindUniqueOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ServerFindUniqueOrThrowArgs>
    ): Prisma__ServerClient<ServerGetPayload<T>>

    /**
     * Find the first Server that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ServerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Server'> extends True ? Prisma__ServerClient<ServerGetPayload<T>> : Prisma__ServerClient<ServerGetPayload<T> | null, null>

    /**
     * Find the first Server that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServerFindFirstOrThrowArgs>
    ): Prisma__ServerClient<ServerGetPayload<T>>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.server.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.server.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverWithIdOnly = await prisma.server.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServerFindManyArgs>(
      args?: SelectSubset<T, ServerFindManyArgs>
    ): Prisma.PrismaPromise<Array<ServerGetPayload<T>>>

    /**
     * Create a Server.
     * @param {ServerCreateArgs} args - Arguments to create a Server.
     * @example
     * // Create one Server
     * const Server = await prisma.server.create({
     *   data: {
     *     // ... data to create a Server
     *   }
     * })
     * 
    **/
    create<T extends ServerCreateArgs>(
      args: SelectSubset<T, ServerCreateArgs>
    ): Prisma__ServerClient<ServerGetPayload<T>>

    /**
     * Create many Servers.
     *     @param {ServerCreateManyArgs} args - Arguments to create many Servers.
     *     @example
     *     // Create many Servers
     *     const server = await prisma.server.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServerCreateManyArgs>(
      args?: SelectSubset<T, ServerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Server.
     * @param {ServerDeleteArgs} args - Arguments to delete one Server.
     * @example
     * // Delete one Server
     * const Server = await prisma.server.delete({
     *   where: {
     *     // ... filter to delete one Server
     *   }
     * })
     * 
    **/
    delete<T extends ServerDeleteArgs>(
      args: SelectSubset<T, ServerDeleteArgs>
    ): Prisma__ServerClient<ServerGetPayload<T>>

    /**
     * Update one Server.
     * @param {ServerUpdateArgs} args - Arguments to update one Server.
     * @example
     * // Update one Server
     * const server = await prisma.server.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServerUpdateArgs>(
      args: SelectSubset<T, ServerUpdateArgs>
    ): Prisma__ServerClient<ServerGetPayload<T>>

    /**
     * Delete zero or more Servers.
     * @param {ServerDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.server.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServerDeleteManyArgs>(
      args?: SelectSubset<T, ServerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServerUpdateManyArgs>(
      args: SelectSubset<T, ServerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Server.
     * @param {ServerUpsertArgs} args - Arguments to update or create a Server.
     * @example
     * // Update or create a Server
     * const server = await prisma.server.upsert({
     *   create: {
     *     // ... data to create a Server
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server we want to update
     *   }
     * })
    **/
    upsert<T extends ServerUpsertArgs>(
      args: SelectSubset<T, ServerUpsertArgs>
    ): Prisma__ServerClient<ServerGetPayload<T>>

    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.server.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServerCountArgs>(
      args?: Subset<T, ServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServerAggregateArgs>(args: Subset<T, ServerAggregateArgs>): Prisma.PrismaPromise<GetServerAggregateType<T>>

    /**
     * Group by Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerGroupByArgs['orderBy'] }
        : { orderBy?: ServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Server.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ServerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    tags<T extends Server$tagsArgs= {}>(args?: Subset<T, Server$tagsArgs>): Prisma.PrismaPromise<Array<ServerTagsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Server base type for findUnique actions
   */
  export type ServerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findUnique
   */
  export interface ServerFindUniqueArgs extends ServerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Server findUniqueOrThrow
   */
  export type ServerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }


  /**
   * Server base type for findFirst actions
   */
  export type ServerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: Enumerable<ServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: Enumerable<ServerScalarFieldEnum>
  }

  /**
   * Server findFirst
   */
  export interface ServerFindFirstArgs extends ServerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Server findFirstOrThrow
   */
  export type ServerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: Enumerable<ServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: Enumerable<ServerScalarFieldEnum>
  }


  /**
   * Server findMany
   */
  export type ServerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: Enumerable<ServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    distinct?: Enumerable<ServerScalarFieldEnum>
  }


  /**
   * Server create
   */
  export type ServerCreateArgs = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * The data needed to create a Server.
     */
    data: XOR<ServerCreateInput, ServerUncheckedCreateInput>
  }


  /**
   * Server createMany
   */
  export type ServerCreateManyArgs = {
    /**
     * The data used to create many Servers.
     */
    data: Enumerable<ServerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Server update
   */
  export type ServerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * The data needed to update a Server.
     */
    data: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
    /**
     * Choose, which Server to update.
     */
    where: ServerWhereUniqueInput
  }


  /**
   * Server updateMany
   */
  export type ServerUpdateManyArgs = {
    /**
     * The data used to update Servers.
     */
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServerWhereInput
  }


  /**
   * Server upsert
   */
  export type ServerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * The filter to search for the Server to update in case it exists.
     */
    where: ServerWhereUniqueInput
    /**
     * In case the Server found by the `where` argument doesn't exist, create a new Server with this data.
     */
    create: XOR<ServerCreateInput, ServerUncheckedCreateInput>
    /**
     * In case the Server was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
  }


  /**
   * Server delete
   */
  export type ServerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
    /**
     * Filter which Server to delete.
     */
    where: ServerWhereUniqueInput
  }


  /**
   * Server deleteMany
   */
  export type ServerDeleteManyArgs = {
    /**
     * Filter which Servers to delete
     */
    where?: ServerWhereInput
  }


  /**
   * Server.tags
   */
  export type Server$tagsArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    where?: ServerTagsWhereInput
    orderBy?: Enumerable<ServerTagsOrderByWithRelationInput>
    cursor?: ServerTagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ServerTagsScalarFieldEnum>
  }


  /**
   * Server without action
   */
  export type ServerArgs = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerInclude | null
  }



  /**
   * Model ServerTags
   */


  export type AggregateServerTags = {
    _count: ServerTagsCountAggregateOutputType | null
    _min: ServerTagsMinAggregateOutputType | null
    _max: ServerTagsMaxAggregateOutputType | null
  }

  export type ServerTagsMinAggregateOutputType = {
    id: string | null
    name: string | null
    serverId: string | null
    createdAt: Date | null
  }

  export type ServerTagsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    serverId: string | null
    createdAt: Date | null
  }

  export type ServerTagsCountAggregateOutputType = {
    id: number
    name: number
    serverId: number
    createdAt: number
    _all: number
  }


  export type ServerTagsMinAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
    createdAt?: true
  }

  export type ServerTagsMaxAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
    createdAt?: true
  }

  export type ServerTagsCountAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
    createdAt?: true
    _all?: true
  }

  export type ServerTagsAggregateArgs = {
    /**
     * Filter which ServerTags to aggregate.
     */
    where?: ServerTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerTags to fetch.
     */
    orderBy?: Enumerable<ServerTagsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServerTags
    **/
    _count?: true | ServerTagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerTagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerTagsMaxAggregateInputType
  }

  export type GetServerTagsAggregateType<T extends ServerTagsAggregateArgs> = {
        [P in keyof T & keyof AggregateServerTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServerTags[P]>
      : GetScalarType<T[P], AggregateServerTags[P]>
  }




  export type ServerTagsGroupByArgs = {
    where?: ServerTagsWhereInput
    orderBy?: Enumerable<ServerTagsOrderByWithAggregationInput>
    by: ServerTagsScalarFieldEnum[]
    having?: ServerTagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerTagsCountAggregateInputType | true
    _min?: ServerTagsMinAggregateInputType
    _max?: ServerTagsMaxAggregateInputType
  }


  export type ServerTagsGroupByOutputType = {
    id: string
    name: string
    serverId: string | null
    createdAt: Date
    _count: ServerTagsCountAggregateOutputType | null
    _min: ServerTagsMinAggregateOutputType | null
    _max: ServerTagsMaxAggregateOutputType | null
  }

  type GetServerTagsGroupByPayload<T extends ServerTagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServerTagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerTagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerTagsGroupByOutputType[P]>
            : GetScalarType<T[P], ServerTagsGroupByOutputType[P]>
        }
      >
    >


  export type ServerTagsSelect = {
    id?: boolean
    name?: boolean
    serverId?: boolean
    createdAt?: boolean
    Server?: boolean | ServerArgs
  }


  export type ServerTagsInclude = {
    Server?: boolean | ServerArgs
  }

  export type ServerTagsGetPayload<S extends boolean | null | undefined | ServerTagsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ServerTags :
    S extends undefined ? never :
    S extends { include: any } & (ServerTagsArgs | ServerTagsFindManyArgs)
    ? ServerTags  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Server' ? ServerGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ServerTagsArgs | ServerTagsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Server' ? ServerGetPayload<S['select'][P]> | null :  P extends keyof ServerTags ? ServerTags[P] : never
  } 
      : ServerTags


  type ServerTagsCountArgs = 
    Omit<ServerTagsFindManyArgs, 'select' | 'include'> & {
      select?: ServerTagsCountAggregateInputType | true
    }

  export interface ServerTagsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ServerTags that matches the filter.
     * @param {ServerTagsFindUniqueArgs} args - Arguments to find a ServerTags
     * @example
     * // Get one ServerTags
     * const serverTags = await prisma.serverTags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServerTagsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ServerTagsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ServerTags'> extends True ? Prisma__ServerTagsClient<ServerTagsGetPayload<T>> : Prisma__ServerTagsClient<ServerTagsGetPayload<T> | null, null>

    /**
     * Find one ServerTags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServerTagsFindUniqueOrThrowArgs} args - Arguments to find a ServerTags
     * @example
     * // Get one ServerTags
     * const serverTags = await prisma.serverTags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServerTagsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ServerTagsFindUniqueOrThrowArgs>
    ): Prisma__ServerTagsClient<ServerTagsGetPayload<T>>

    /**
     * Find the first ServerTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerTagsFindFirstArgs} args - Arguments to find a ServerTags
     * @example
     * // Get one ServerTags
     * const serverTags = await prisma.serverTags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServerTagsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ServerTagsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ServerTags'> extends True ? Prisma__ServerTagsClient<ServerTagsGetPayload<T>> : Prisma__ServerTagsClient<ServerTagsGetPayload<T> | null, null>

    /**
     * Find the first ServerTags that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerTagsFindFirstOrThrowArgs} args - Arguments to find a ServerTags
     * @example
     * // Get one ServerTags
     * const serverTags = await prisma.serverTags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServerTagsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServerTagsFindFirstOrThrowArgs>
    ): Prisma__ServerTagsClient<ServerTagsGetPayload<T>>

    /**
     * Find zero or more ServerTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerTagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServerTags
     * const serverTags = await prisma.serverTags.findMany()
     * 
     * // Get first 10 ServerTags
     * const serverTags = await prisma.serverTags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverTagsWithIdOnly = await prisma.serverTags.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServerTagsFindManyArgs>(
      args?: SelectSubset<T, ServerTagsFindManyArgs>
    ): Prisma.PrismaPromise<Array<ServerTagsGetPayload<T>>>

    /**
     * Create a ServerTags.
     * @param {ServerTagsCreateArgs} args - Arguments to create a ServerTags.
     * @example
     * // Create one ServerTags
     * const ServerTags = await prisma.serverTags.create({
     *   data: {
     *     // ... data to create a ServerTags
     *   }
     * })
     * 
    **/
    create<T extends ServerTagsCreateArgs>(
      args: SelectSubset<T, ServerTagsCreateArgs>
    ): Prisma__ServerTagsClient<ServerTagsGetPayload<T>>

    /**
     * Create many ServerTags.
     *     @param {ServerTagsCreateManyArgs} args - Arguments to create many ServerTags.
     *     @example
     *     // Create many ServerTags
     *     const serverTags = await prisma.serverTags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServerTagsCreateManyArgs>(
      args?: SelectSubset<T, ServerTagsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServerTags.
     * @param {ServerTagsDeleteArgs} args - Arguments to delete one ServerTags.
     * @example
     * // Delete one ServerTags
     * const ServerTags = await prisma.serverTags.delete({
     *   where: {
     *     // ... filter to delete one ServerTags
     *   }
     * })
     * 
    **/
    delete<T extends ServerTagsDeleteArgs>(
      args: SelectSubset<T, ServerTagsDeleteArgs>
    ): Prisma__ServerTagsClient<ServerTagsGetPayload<T>>

    /**
     * Update one ServerTags.
     * @param {ServerTagsUpdateArgs} args - Arguments to update one ServerTags.
     * @example
     * // Update one ServerTags
     * const serverTags = await prisma.serverTags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServerTagsUpdateArgs>(
      args: SelectSubset<T, ServerTagsUpdateArgs>
    ): Prisma__ServerTagsClient<ServerTagsGetPayload<T>>

    /**
     * Delete zero or more ServerTags.
     * @param {ServerTagsDeleteManyArgs} args - Arguments to filter ServerTags to delete.
     * @example
     * // Delete a few ServerTags
     * const { count } = await prisma.serverTags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServerTagsDeleteManyArgs>(
      args?: SelectSubset<T, ServerTagsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerTagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServerTags
     * const serverTags = await prisma.serverTags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServerTagsUpdateManyArgs>(
      args: SelectSubset<T, ServerTagsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServerTags.
     * @param {ServerTagsUpsertArgs} args - Arguments to update or create a ServerTags.
     * @example
     * // Update or create a ServerTags
     * const serverTags = await prisma.serverTags.upsert({
     *   create: {
     *     // ... data to create a ServerTags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServerTags we want to update
     *   }
     * })
    **/
    upsert<T extends ServerTagsUpsertArgs>(
      args: SelectSubset<T, ServerTagsUpsertArgs>
    ): Prisma__ServerTagsClient<ServerTagsGetPayload<T>>

    /**
     * Count the number of ServerTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerTagsCountArgs} args - Arguments to filter ServerTags to count.
     * @example
     * // Count the number of ServerTags
     * const count = await prisma.serverTags.count({
     *   where: {
     *     // ... the filter for the ServerTags we want to count
     *   }
     * })
    **/
    count<T extends ServerTagsCountArgs>(
      args?: Subset<T, ServerTagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerTagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServerTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerTagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServerTagsAggregateArgs>(args: Subset<T, ServerTagsAggregateArgs>): Prisma.PrismaPromise<GetServerTagsAggregateType<T>>

    /**
     * Group by ServerTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerTagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServerTagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerTagsGroupByArgs['orderBy'] }
        : { orderBy?: ServerTagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServerTagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ServerTags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ServerTagsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Server<T extends ServerArgs= {}>(args?: Subset<T, ServerArgs>): Prisma__ServerClient<ServerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ServerTags base type for findUnique actions
   */
  export type ServerTagsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * Filter, which ServerTags to fetch.
     */
    where: ServerTagsWhereUniqueInput
  }

  /**
   * ServerTags findUnique
   */
  export interface ServerTagsFindUniqueArgs extends ServerTagsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ServerTags findUniqueOrThrow
   */
  export type ServerTagsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * Filter, which ServerTags to fetch.
     */
    where: ServerTagsWhereUniqueInput
  }


  /**
   * ServerTags base type for findFirst actions
   */
  export type ServerTagsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * Filter, which ServerTags to fetch.
     */
    where?: ServerTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerTags to fetch.
     */
    orderBy?: Enumerable<ServerTagsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerTags.
     */
    cursor?: ServerTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerTags.
     */
    distinct?: Enumerable<ServerTagsScalarFieldEnum>
  }

  /**
   * ServerTags findFirst
   */
  export interface ServerTagsFindFirstArgs extends ServerTagsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ServerTags findFirstOrThrow
   */
  export type ServerTagsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * Filter, which ServerTags to fetch.
     */
    where?: ServerTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerTags to fetch.
     */
    orderBy?: Enumerable<ServerTagsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerTags.
     */
    cursor?: ServerTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerTags.
     */
    distinct?: Enumerable<ServerTagsScalarFieldEnum>
  }


  /**
   * ServerTags findMany
   */
  export type ServerTagsFindManyArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * Filter, which ServerTags to fetch.
     */
    where?: ServerTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerTags to fetch.
     */
    orderBy?: Enumerable<ServerTagsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServerTags.
     */
    cursor?: ServerTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerTags.
     */
    skip?: number
    distinct?: Enumerable<ServerTagsScalarFieldEnum>
  }


  /**
   * ServerTags create
   */
  export type ServerTagsCreateArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * The data needed to create a ServerTags.
     */
    data: XOR<ServerTagsCreateInput, ServerTagsUncheckedCreateInput>
  }


  /**
   * ServerTags createMany
   */
  export type ServerTagsCreateManyArgs = {
    /**
     * The data used to create many ServerTags.
     */
    data: Enumerable<ServerTagsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ServerTags update
   */
  export type ServerTagsUpdateArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * The data needed to update a ServerTags.
     */
    data: XOR<ServerTagsUpdateInput, ServerTagsUncheckedUpdateInput>
    /**
     * Choose, which ServerTags to update.
     */
    where: ServerTagsWhereUniqueInput
  }


  /**
   * ServerTags updateMany
   */
  export type ServerTagsUpdateManyArgs = {
    /**
     * The data used to update ServerTags.
     */
    data: XOR<ServerTagsUpdateManyMutationInput, ServerTagsUncheckedUpdateManyInput>
    /**
     * Filter which ServerTags to update
     */
    where?: ServerTagsWhereInput
  }


  /**
   * ServerTags upsert
   */
  export type ServerTagsUpsertArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * The filter to search for the ServerTags to update in case it exists.
     */
    where: ServerTagsWhereUniqueInput
    /**
     * In case the ServerTags found by the `where` argument doesn't exist, create a new ServerTags with this data.
     */
    create: XOR<ServerTagsCreateInput, ServerTagsUncheckedCreateInput>
    /**
     * In case the ServerTags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerTagsUpdateInput, ServerTagsUncheckedUpdateInput>
  }


  /**
   * ServerTags delete
   */
  export type ServerTagsDeleteArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
    /**
     * Filter which ServerTags to delete.
     */
    where: ServerTagsWhereUniqueInput
  }


  /**
   * ServerTags deleteMany
   */
  export type ServerTagsDeleteManyArgs = {
    /**
     * Filter which ServerTags to delete
     */
    where?: ServerTagsWhereInput
  }


  /**
   * ServerTags without action
   */
  export type ServerTagsArgs = {
    /**
     * Select specific fields to fetch from the ServerTags
     */
    select?: ServerTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerTagsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ServerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    discord_channel: 'discord_channel',
    contact: 'contact',
    description: 'description',
    logo: 'logo',
    createdAt: 'createdAt'
  };

  export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum]


  export const ServerTagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serverId: 'serverId',
    createdAt: 'createdAt'
  };

  export type ServerTagsScalarFieldEnum = (typeof ServerTagsScalarFieldEnum)[keyof typeof ServerTagsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    birth: 'birth',
    phone: 'phone',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringNullableFilter | string | null
    email?: StringFilter | string
    name?: StringFilter | string
    birth?: DateTimeFilter | Date | string
    phone?: StringNullableFilter | string | null
    password?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    birth?: DateTimeWithAggregatesFilter | Date | string
    phone?: StringNullableWithAggregatesFilter | string | null
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ServerWhereInput = {
    AND?: Enumerable<ServerWhereInput>
    OR?: Enumerable<ServerWhereInput>
    NOT?: Enumerable<ServerWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    discord_channel?: StringFilter | string
    contact?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    logo?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    tags?: ServerTagsListRelationFilter
  }

  export type ServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    discord_channel?: SortOrder
    contact?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    tags?: ServerTagsOrderByRelationAggregateInput
  }

  export type ServerWhereUniqueInput = {
    id?: string
    discord_channel?: string
  }

  export type ServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    discord_channel?: SortOrder
    contact?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    _count?: ServerCountOrderByAggregateInput
    _max?: ServerMaxOrderByAggregateInput
    _min?: ServerMinOrderByAggregateInput
  }

  export type ServerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ServerScalarWhereWithAggregatesInput>
    OR?: Enumerable<ServerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ServerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    discord_channel?: StringWithAggregatesFilter | string
    contact?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    logo?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ServerTagsWhereInput = {
    AND?: Enumerable<ServerTagsWhereInput>
    OR?: Enumerable<ServerTagsWhereInput>
    NOT?: Enumerable<ServerTagsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    serverId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    Server?: XOR<ServerRelationFilter, ServerWhereInput> | null
  }

  export type ServerTagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    Server?: ServerOrderByWithRelationInput
  }

  export type ServerTagsWhereUniqueInput = {
    id?: string
  }

  export type ServerTagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    _count?: ServerTagsCountOrderByAggregateInput
    _max?: ServerTagsMaxOrderByAggregateInput
    _min?: ServerTagsMinOrderByAggregateInput
  }

  export type ServerTagsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ServerTagsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ServerTagsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ServerTagsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    serverId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string | null
    email: string
    name: string
    birth: Date | string
    phone?: string | null
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string | null
    email: string
    name: string
    birth: Date | string
    phone?: string | null
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string | null
    email: string
    name: string
    birth: Date | string
    phone?: string | null
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerCreateInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
    tags?: ServerTagsCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
    tags?: ServerTagsUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ServerTagsUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ServerTagsUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServerCreateManyInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
  }

  export type ServerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerTagsCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    Server?: ServerCreateNestedOneWithoutTagsInput
  }

  export type ServerTagsUncheckedCreateInput = {
    id?: string
    name: string
    serverId?: string | null
    createdAt?: Date | string
  }

  export type ServerTagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Server?: ServerUpdateOneWithoutTagsNestedInput
  }

  export type ServerTagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerTagsCreateManyInput = {
    id?: string
    name: string
    serverId?: string | null
    createdAt?: Date | string
  }

  export type ServerTagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerTagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ServerTagsListRelationFilter = {
    every?: ServerTagsWhereInput
    some?: ServerTagsWhereInput
    none?: ServerTagsWhereInput
  }

  export type ServerTagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discord_channel?: SortOrder
    contact?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type ServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discord_channel?: SortOrder
    contact?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type ServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discord_channel?: SortOrder
    contact?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type ServerRelationFilter = {
    is?: ServerWhereInput | null
    isNot?: ServerWhereInput | null
  }

  export type ServerTagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServerTagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServerTagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServerTagsCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<ServerTagsCreateWithoutServerInput>, Enumerable<ServerTagsUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerTagsCreateOrConnectWithoutServerInput>
    createMany?: ServerTagsCreateManyServerInputEnvelope
    connect?: Enumerable<ServerTagsWhereUniqueInput>
  }

  export type ServerTagsUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<ServerTagsCreateWithoutServerInput>, Enumerable<ServerTagsUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerTagsCreateOrConnectWithoutServerInput>
    createMany?: ServerTagsCreateManyServerInputEnvelope
    connect?: Enumerable<ServerTagsWhereUniqueInput>
  }

  export type ServerTagsUpdateManyWithoutServerNestedInput = {
    create?: XOR<Enumerable<ServerTagsCreateWithoutServerInput>, Enumerable<ServerTagsUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerTagsCreateOrConnectWithoutServerInput>
    upsert?: Enumerable<ServerTagsUpsertWithWhereUniqueWithoutServerInput>
    createMany?: ServerTagsCreateManyServerInputEnvelope
    set?: Enumerable<ServerTagsWhereUniqueInput>
    disconnect?: Enumerable<ServerTagsWhereUniqueInput>
    delete?: Enumerable<ServerTagsWhereUniqueInput>
    connect?: Enumerable<ServerTagsWhereUniqueInput>
    update?: Enumerable<ServerTagsUpdateWithWhereUniqueWithoutServerInput>
    updateMany?: Enumerable<ServerTagsUpdateManyWithWhereWithoutServerInput>
    deleteMany?: Enumerable<ServerTagsScalarWhereInput>
  }

  export type ServerTagsUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<Enumerable<ServerTagsCreateWithoutServerInput>, Enumerable<ServerTagsUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerTagsCreateOrConnectWithoutServerInput>
    upsert?: Enumerable<ServerTagsUpsertWithWhereUniqueWithoutServerInput>
    createMany?: ServerTagsCreateManyServerInputEnvelope
    set?: Enumerable<ServerTagsWhereUniqueInput>
    disconnect?: Enumerable<ServerTagsWhereUniqueInput>
    delete?: Enumerable<ServerTagsWhereUniqueInput>
    connect?: Enumerable<ServerTagsWhereUniqueInput>
    update?: Enumerable<ServerTagsUpdateWithWhereUniqueWithoutServerInput>
    updateMany?: Enumerable<ServerTagsUpdateManyWithWhereWithoutServerInput>
    deleteMany?: Enumerable<ServerTagsScalarWhereInput>
  }

  export type ServerCreateNestedOneWithoutTagsInput = {
    create?: XOR<ServerCreateWithoutTagsInput, ServerUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ServerCreateOrConnectWithoutTagsInput
    connect?: ServerWhereUniqueInput
  }

  export type ServerUpdateOneWithoutTagsNestedInput = {
    create?: XOR<ServerCreateWithoutTagsInput, ServerUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ServerCreateOrConnectWithoutTagsInput
    upsert?: ServerUpsertWithoutTagsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ServerWhereUniqueInput
    update?: XOR<ServerUpdateWithoutTagsInput, ServerUncheckedUpdateWithoutTagsInput>
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ServerTagsCreateWithoutServerInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ServerTagsUncheckedCreateWithoutServerInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ServerTagsCreateOrConnectWithoutServerInput = {
    where: ServerTagsWhereUniqueInput
    create: XOR<ServerTagsCreateWithoutServerInput, ServerTagsUncheckedCreateWithoutServerInput>
  }

  export type ServerTagsCreateManyServerInputEnvelope = {
    data: Enumerable<ServerTagsCreateManyServerInput>
    skipDuplicates?: boolean
  }

  export type ServerTagsUpsertWithWhereUniqueWithoutServerInput = {
    where: ServerTagsWhereUniqueInput
    update: XOR<ServerTagsUpdateWithoutServerInput, ServerTagsUncheckedUpdateWithoutServerInput>
    create: XOR<ServerTagsCreateWithoutServerInput, ServerTagsUncheckedCreateWithoutServerInput>
  }

  export type ServerTagsUpdateWithWhereUniqueWithoutServerInput = {
    where: ServerTagsWhereUniqueInput
    data: XOR<ServerTagsUpdateWithoutServerInput, ServerTagsUncheckedUpdateWithoutServerInput>
  }

  export type ServerTagsUpdateManyWithWhereWithoutServerInput = {
    where: ServerTagsScalarWhereInput
    data: XOR<ServerTagsUpdateManyMutationInput, ServerTagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type ServerTagsScalarWhereInput = {
    AND?: Enumerable<ServerTagsScalarWhereInput>
    OR?: Enumerable<ServerTagsScalarWhereInput>
    NOT?: Enumerable<ServerTagsScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    serverId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type ServerCreateWithoutTagsInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
  }

  export type ServerUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
  }

  export type ServerCreateOrConnectWithoutTagsInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutTagsInput, ServerUncheckedCreateWithoutTagsInput>
  }

  export type ServerUpsertWithoutTagsInput = {
    update: XOR<ServerUpdateWithoutTagsInput, ServerUncheckedUpdateWithoutTagsInput>
    create: XOR<ServerCreateWithoutTagsInput, ServerUncheckedCreateWithoutTagsInput>
  }

  export type ServerUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerTagsCreateManyServerInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ServerTagsUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerTagsUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerTagsUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}