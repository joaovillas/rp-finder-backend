
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
 * Model Permission
 * 
 */
export type Permission = {
  id: string
  name: string
  createdAt: Date
}

/**
 * Model UserHasPermission
 * 
 */
export type UserHasPermission = {
  id: string
  userId: string | null
  permissionId: string | null
  createdAt: Date
}

/**
 * Model ServerAvaliation
 * 
 */
export type ServerAvaliation = {
  id: string
  serverId: string | null
  userId: string | null
  avaliation: number
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

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<GlobalReject>;

  /**
   * `prisma.userHasPermission`: Exposes CRUD operations for the **UserHasPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHasPermissions
    * const userHasPermissions = await prisma.userHasPermission.findMany()
    * ```
    */
  get userHasPermission(): Prisma.UserHasPermissionDelegate<GlobalReject>;

  /**
   * `prisma.serverAvaliation`: Exposes CRUD operations for the **ServerAvaliation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServerAvaliations
    * const serverAvaliations = await prisma.serverAvaliation.findMany()
    * ```
    */
  get serverAvaliation(): Prisma.ServerAvaliationDelegate<GlobalReject>;
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
    ServerTags: 'ServerTags',
    Permission: 'Permission',
    UserHasPermission: 'UserHasPermission',
    ServerAvaliation: 'ServerAvaliation'
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
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    permissions: number
    ServerAvaliation: number
  }

  export type UserCountOutputTypeSelect = {
    permissions?: boolean
    ServerAvaliation?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ServerCountOutputType
   */


  export type ServerCountOutputType = {
    tags: number
    ServerAvaliation: number
  }

  export type ServerCountOutputTypeSelect = {
    tags?: boolean
    ServerAvaliation?: boolean
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
   * Count Type PermissionCountOutputType
   */


  export type PermissionCountOutputType = {
    permission: number
  }

  export type PermissionCountOutputTypeSelect = {
    permission?: boolean
  }

  export type PermissionCountOutputTypeGetPayload<S extends boolean | null | undefined | PermissionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PermissionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PermissionCountOutputTypeArgs)
    ? PermissionCountOutputType 
    : S extends { select: any } & (PermissionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PermissionCountOutputType ? PermissionCountOutputType[P] : never
  } 
      : PermissionCountOutputType




  // Custom InputTypes

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect | null
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
    permissions?: boolean | User$permissionsArgs
    ServerAvaliation?: boolean | User$ServerAvaliationArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    permissions?: boolean | User$permissionsArgs
    ServerAvaliation?: boolean | User$ServerAvaliationArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'permissions' ? Array < UserHasPermissionGetPayload<S['include'][P]>>  :
        P extends 'ServerAvaliation' ? Array < ServerAvaliationGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'permissions' ? Array < UserHasPermissionGetPayload<S['select'][P]>>  :
        P extends 'ServerAvaliation' ? Array < ServerAvaliationGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
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

    permissions<T extends User$permissionsArgs= {}>(args?: Subset<T, User$permissionsArgs>): Prisma.PrismaPromise<Array<UserHasPermissionGetPayload<T>>| Null>;

    ServerAvaliation<T extends User$ServerAvaliationArgs= {}>(args?: Subset<T, User$ServerAvaliationArgs>): Prisma.PrismaPromise<Array<ServerAvaliationGetPayload<T>>| Null>;

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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
   * User.permissions
   */
  export type User$permissionsArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    where?: UserHasPermissionWhereInput
    orderBy?: Enumerable<UserHasPermissionOrderByWithRelationInput>
    cursor?: UserHasPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserHasPermissionScalarFieldEnum>
  }


  /**
   * User.ServerAvaliation
   */
  export type User$ServerAvaliationArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    where?: ServerAvaliationWhereInput
    orderBy?: Enumerable<ServerAvaliationOrderByWithRelationInput>
    cursor?: ServerAvaliationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ServerAvaliationScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
    ServerAvaliation?: boolean | Server$ServerAvaliationArgs
    _count?: boolean | ServerCountOutputTypeArgs
  }


  export type ServerInclude = {
    tags?: boolean | Server$tagsArgs
    ServerAvaliation?: boolean | Server$ServerAvaliationArgs
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
        P extends 'ServerAvaliation' ? Array < ServerAvaliationGetPayload<S['include'][P]>>  :
        P extends '_count' ? ServerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ServerArgs | ServerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tags' ? Array < ServerTagsGetPayload<S['select'][P]>>  :
        P extends 'ServerAvaliation' ? Array < ServerAvaliationGetPayload<S['select'][P]>>  :
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

    ServerAvaliation<T extends Server$ServerAvaliationArgs= {}>(args?: Subset<T, Server$ServerAvaliationArgs>): Prisma.PrismaPromise<Array<ServerAvaliationGetPayload<T>>| Null>;

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
   * Server.ServerAvaliation
   */
  export type Server$ServerAvaliationArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    where?: ServerAvaliationWhereInput
    orderBy?: Enumerable<ServerAvaliationOrderByWithRelationInput>
    cursor?: ServerAvaliationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ServerAvaliationScalarFieldEnum>
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
   * Model Permission
   */


  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs = {
    where?: PermissionWhereInput
    orderBy?: Enumerable<PermissionOrderByWithAggregationInput>
    by: PermissionScalarFieldEnum[]
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }


  export type PermissionGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    permission?: boolean | Permission$permissionArgs
    _count?: boolean | PermissionCountOutputTypeArgs
  }


  export type PermissionInclude = {
    permission?: boolean | Permission$permissionArgs
    _count?: boolean | PermissionCountOutputTypeArgs
  }

  export type PermissionGetPayload<S extends boolean | null | undefined | PermissionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Permission :
    S extends undefined ? never :
    S extends { include: any } & (PermissionArgs | PermissionFindManyArgs)
    ? Permission  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'permission' ? Array < UserHasPermissionGetPayload<S['include'][P]>>  :
        P extends '_count' ? PermissionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PermissionArgs | PermissionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'permission' ? Array < UserHasPermissionGetPayload<S['select'][P]>>  :
        P extends '_count' ? PermissionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Permission ? Permission[P] : never
  } 
      : Permission


  type PermissionCountArgs = 
    Omit<PermissionFindManyArgs, 'select' | 'include'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PermissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PermissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Permission'> extends True ? Prisma__PermissionClient<PermissionGetPayload<T>> : Prisma__PermissionClient<PermissionGetPayload<T> | null, null>

    /**
     * Find one Permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PermissionFindUniqueOrThrowArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PermissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PermissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Permission'> extends True ? Prisma__PermissionClient<PermissionGetPayload<T>> : Prisma__PermissionClient<PermissionGetPayload<T> | null, null>

    /**
     * Find the first Permission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PermissionFindFirstOrThrowArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PermissionFindManyArgs>(
      args?: SelectSubset<T, PermissionFindManyArgs>
    ): Prisma.PrismaPromise<Array<PermissionGetPayload<T>>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends PermissionCreateArgs>(
      args: SelectSubset<T, PermissionCreateArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Create many Permissions.
     *     @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     *     @example
     *     // Create many Permissions
     *     const permission = await prisma.permission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PermissionCreateManyArgs>(
      args?: SelectSubset<T, PermissionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends PermissionDeleteArgs>(
      args: SelectSubset<T, PermissionDeleteArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PermissionUpdateArgs>(
      args: SelectSubset<T, PermissionUpdateArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PermissionDeleteManyArgs>(
      args?: SelectSubset<T, PermissionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PermissionUpdateManyArgs>(
      args: SelectSubset<T, PermissionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends PermissionUpsertArgs>(
      args: SelectSubset<T, PermissionUpsertArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PermissionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    permission<T extends Permission$permissionArgs= {}>(args?: Subset<T, Permission$permissionArgs>): Prisma.PrismaPromise<Array<UserHasPermissionGetPayload<T>>| Null>;

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
   * Permission base type for findUnique actions
   */
  export type PermissionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUnique
   */
  export interface PermissionFindUniqueArgs extends PermissionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission base type for findFirst actions
   */
  export type PermissionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }

  /**
   * Permission findFirst
   */
  export interface PermissionFindFirstArgs extends PermissionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Permission create
   */
  export type PermissionCreateArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }


  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs = {
    /**
     * The data used to create many Permissions.
     */
    data: Enumerable<PermissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Permission update
   */
  export type PermissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }


  /**
   * Permission delete
   */
  export type PermissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission.permission
   */
  export type Permission$permissionArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    where?: UserHasPermissionWhereInput
    orderBy?: Enumerable<UserHasPermissionOrderByWithRelationInput>
    cursor?: UserHasPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserHasPermissionScalarFieldEnum>
  }


  /**
   * Permission without action
   */
  export type PermissionArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
  }



  /**
   * Model UserHasPermission
   */


  export type AggregateUserHasPermission = {
    _count: UserHasPermissionCountAggregateOutputType | null
    _min: UserHasPermissionMinAggregateOutputType | null
    _max: UserHasPermissionMaxAggregateOutputType | null
  }

  export type UserHasPermissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    permissionId: string | null
    createdAt: Date | null
  }

  export type UserHasPermissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    permissionId: string | null
    createdAt: Date | null
  }

  export type UserHasPermissionCountAggregateOutputType = {
    id: number
    userId: number
    permissionId: number
    createdAt: number
    _all: number
  }


  export type UserHasPermissionMinAggregateInputType = {
    id?: true
    userId?: true
    permissionId?: true
    createdAt?: true
  }

  export type UserHasPermissionMaxAggregateInputType = {
    id?: true
    userId?: true
    permissionId?: true
    createdAt?: true
  }

  export type UserHasPermissionCountAggregateInputType = {
    id?: true
    userId?: true
    permissionId?: true
    createdAt?: true
    _all?: true
  }

  export type UserHasPermissionAggregateArgs = {
    /**
     * Filter which UserHasPermission to aggregate.
     */
    where?: UserHasPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasPermissions to fetch.
     */
    orderBy?: Enumerable<UserHasPermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHasPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHasPermissions
    **/
    _count?: true | UserHasPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHasPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHasPermissionMaxAggregateInputType
  }

  export type GetUserHasPermissionAggregateType<T extends UserHasPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHasPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHasPermission[P]>
      : GetScalarType<T[P], AggregateUserHasPermission[P]>
  }




  export type UserHasPermissionGroupByArgs = {
    where?: UserHasPermissionWhereInput
    orderBy?: Enumerable<UserHasPermissionOrderByWithAggregationInput>
    by: UserHasPermissionScalarFieldEnum[]
    having?: UserHasPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHasPermissionCountAggregateInputType | true
    _min?: UserHasPermissionMinAggregateInputType
    _max?: UserHasPermissionMaxAggregateInputType
  }


  export type UserHasPermissionGroupByOutputType = {
    id: string
    userId: string | null
    permissionId: string | null
    createdAt: Date
    _count: UserHasPermissionCountAggregateOutputType | null
    _min: UserHasPermissionMinAggregateOutputType | null
    _max: UserHasPermissionMaxAggregateOutputType | null
  }

  type GetUserHasPermissionGroupByPayload<T extends UserHasPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserHasPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHasPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHasPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserHasPermissionGroupByOutputType[P]>
        }
      >
    >


  export type UserHasPermissionSelect = {
    id?: boolean
    userId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    user?: boolean | UserArgs
    permission?: boolean | PermissionArgs
  }


  export type UserHasPermissionInclude = {
    user?: boolean | UserArgs
    permission?: boolean | PermissionArgs
  }

  export type UserHasPermissionGetPayload<S extends boolean | null | undefined | UserHasPermissionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserHasPermission :
    S extends undefined ? never :
    S extends { include: any } & (UserHasPermissionArgs | UserHasPermissionFindManyArgs)
    ? UserHasPermission  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'permission' ? PermissionGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UserHasPermissionArgs | UserHasPermissionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'permission' ? PermissionGetPayload<S['select'][P]> | null :  P extends keyof UserHasPermission ? UserHasPermission[P] : never
  } 
      : UserHasPermission


  type UserHasPermissionCountArgs = 
    Omit<UserHasPermissionFindManyArgs, 'select' | 'include'> & {
      select?: UserHasPermissionCountAggregateInputType | true
    }

  export interface UserHasPermissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserHasPermission that matches the filter.
     * @param {UserHasPermissionFindUniqueArgs} args - Arguments to find a UserHasPermission
     * @example
     * // Get one UserHasPermission
     * const userHasPermission = await prisma.userHasPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserHasPermissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserHasPermissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserHasPermission'> extends True ? Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T>> : Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T> | null, null>

    /**
     * Find one UserHasPermission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserHasPermissionFindUniqueOrThrowArgs} args - Arguments to find a UserHasPermission
     * @example
     * // Get one UserHasPermission
     * const userHasPermission = await prisma.userHasPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserHasPermissionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserHasPermissionFindUniqueOrThrowArgs>
    ): Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T>>

    /**
     * Find the first UserHasPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasPermissionFindFirstArgs} args - Arguments to find a UserHasPermission
     * @example
     * // Get one UserHasPermission
     * const userHasPermission = await prisma.userHasPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserHasPermissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserHasPermissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserHasPermission'> extends True ? Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T>> : Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T> | null, null>

    /**
     * Find the first UserHasPermission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasPermissionFindFirstOrThrowArgs} args - Arguments to find a UserHasPermission
     * @example
     * // Get one UserHasPermission
     * const userHasPermission = await prisma.userHasPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserHasPermissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserHasPermissionFindFirstOrThrowArgs>
    ): Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T>>

    /**
     * Find zero or more UserHasPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasPermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHasPermissions
     * const userHasPermissions = await prisma.userHasPermission.findMany()
     * 
     * // Get first 10 UserHasPermissions
     * const userHasPermissions = await prisma.userHasPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHasPermissionWithIdOnly = await prisma.userHasPermission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserHasPermissionFindManyArgs>(
      args?: SelectSubset<T, UserHasPermissionFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserHasPermissionGetPayload<T>>>

    /**
     * Create a UserHasPermission.
     * @param {UserHasPermissionCreateArgs} args - Arguments to create a UserHasPermission.
     * @example
     * // Create one UserHasPermission
     * const UserHasPermission = await prisma.userHasPermission.create({
     *   data: {
     *     // ... data to create a UserHasPermission
     *   }
     * })
     * 
    **/
    create<T extends UserHasPermissionCreateArgs>(
      args: SelectSubset<T, UserHasPermissionCreateArgs>
    ): Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T>>

    /**
     * Create many UserHasPermissions.
     *     @param {UserHasPermissionCreateManyArgs} args - Arguments to create many UserHasPermissions.
     *     @example
     *     // Create many UserHasPermissions
     *     const userHasPermission = await prisma.userHasPermission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserHasPermissionCreateManyArgs>(
      args?: SelectSubset<T, UserHasPermissionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserHasPermission.
     * @param {UserHasPermissionDeleteArgs} args - Arguments to delete one UserHasPermission.
     * @example
     * // Delete one UserHasPermission
     * const UserHasPermission = await prisma.userHasPermission.delete({
     *   where: {
     *     // ... filter to delete one UserHasPermission
     *   }
     * })
     * 
    **/
    delete<T extends UserHasPermissionDeleteArgs>(
      args: SelectSubset<T, UserHasPermissionDeleteArgs>
    ): Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T>>

    /**
     * Update one UserHasPermission.
     * @param {UserHasPermissionUpdateArgs} args - Arguments to update one UserHasPermission.
     * @example
     * // Update one UserHasPermission
     * const userHasPermission = await prisma.userHasPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserHasPermissionUpdateArgs>(
      args: SelectSubset<T, UserHasPermissionUpdateArgs>
    ): Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T>>

    /**
     * Delete zero or more UserHasPermissions.
     * @param {UserHasPermissionDeleteManyArgs} args - Arguments to filter UserHasPermissions to delete.
     * @example
     * // Delete a few UserHasPermissions
     * const { count } = await prisma.userHasPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserHasPermissionDeleteManyArgs>(
      args?: SelectSubset<T, UserHasPermissionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHasPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHasPermissions
     * const userHasPermission = await prisma.userHasPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserHasPermissionUpdateManyArgs>(
      args: SelectSubset<T, UserHasPermissionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserHasPermission.
     * @param {UserHasPermissionUpsertArgs} args - Arguments to update or create a UserHasPermission.
     * @example
     * // Update or create a UserHasPermission
     * const userHasPermission = await prisma.userHasPermission.upsert({
     *   create: {
     *     // ... data to create a UserHasPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHasPermission we want to update
     *   }
     * })
    **/
    upsert<T extends UserHasPermissionUpsertArgs>(
      args: SelectSubset<T, UserHasPermissionUpsertArgs>
    ): Prisma__UserHasPermissionClient<UserHasPermissionGetPayload<T>>

    /**
     * Count the number of UserHasPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasPermissionCountArgs} args - Arguments to filter UserHasPermissions to count.
     * @example
     * // Count the number of UserHasPermissions
     * const count = await prisma.userHasPermission.count({
     *   where: {
     *     // ... the filter for the UserHasPermissions we want to count
     *   }
     * })
    **/
    count<T extends UserHasPermissionCountArgs>(
      args?: Subset<T, UserHasPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHasPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHasPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserHasPermissionAggregateArgs>(args: Subset<T, UserHasPermissionAggregateArgs>): Prisma.PrismaPromise<GetUserHasPermissionAggregateType<T>>

    /**
     * Group by UserHasPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasPermissionGroupByArgs} args - Group by arguments.
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
      T extends UserHasPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHasPermissionGroupByArgs['orderBy'] }
        : { orderBy?: UserHasPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserHasPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHasPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHasPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserHasPermissionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    permission<T extends PermissionArgs= {}>(args?: Subset<T, PermissionArgs>): Prisma__PermissionClient<PermissionGetPayload<T> | Null>;

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
   * UserHasPermission base type for findUnique actions
   */
  export type UserHasPermissionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * Filter, which UserHasPermission to fetch.
     */
    where: UserHasPermissionWhereUniqueInput
  }

  /**
   * UserHasPermission findUnique
   */
  export interface UserHasPermissionFindUniqueArgs extends UserHasPermissionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserHasPermission findUniqueOrThrow
   */
  export type UserHasPermissionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * Filter, which UserHasPermission to fetch.
     */
    where: UserHasPermissionWhereUniqueInput
  }


  /**
   * UserHasPermission base type for findFirst actions
   */
  export type UserHasPermissionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * Filter, which UserHasPermission to fetch.
     */
    where?: UserHasPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasPermissions to fetch.
     */
    orderBy?: Enumerable<UserHasPermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHasPermissions.
     */
    cursor?: UserHasPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHasPermissions.
     */
    distinct?: Enumerable<UserHasPermissionScalarFieldEnum>
  }

  /**
   * UserHasPermission findFirst
   */
  export interface UserHasPermissionFindFirstArgs extends UserHasPermissionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserHasPermission findFirstOrThrow
   */
  export type UserHasPermissionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * Filter, which UserHasPermission to fetch.
     */
    where?: UserHasPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasPermissions to fetch.
     */
    orderBy?: Enumerable<UserHasPermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHasPermissions.
     */
    cursor?: UserHasPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHasPermissions.
     */
    distinct?: Enumerable<UserHasPermissionScalarFieldEnum>
  }


  /**
   * UserHasPermission findMany
   */
  export type UserHasPermissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * Filter, which UserHasPermissions to fetch.
     */
    where?: UserHasPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasPermissions to fetch.
     */
    orderBy?: Enumerable<UserHasPermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHasPermissions.
     */
    cursor?: UserHasPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasPermissions.
     */
    skip?: number
    distinct?: Enumerable<UserHasPermissionScalarFieldEnum>
  }


  /**
   * UserHasPermission create
   */
  export type UserHasPermissionCreateArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * The data needed to create a UserHasPermission.
     */
    data: XOR<UserHasPermissionCreateInput, UserHasPermissionUncheckedCreateInput>
  }


  /**
   * UserHasPermission createMany
   */
  export type UserHasPermissionCreateManyArgs = {
    /**
     * The data used to create many UserHasPermissions.
     */
    data: Enumerable<UserHasPermissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserHasPermission update
   */
  export type UserHasPermissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * The data needed to update a UserHasPermission.
     */
    data: XOR<UserHasPermissionUpdateInput, UserHasPermissionUncheckedUpdateInput>
    /**
     * Choose, which UserHasPermission to update.
     */
    where: UserHasPermissionWhereUniqueInput
  }


  /**
   * UserHasPermission updateMany
   */
  export type UserHasPermissionUpdateManyArgs = {
    /**
     * The data used to update UserHasPermissions.
     */
    data: XOR<UserHasPermissionUpdateManyMutationInput, UserHasPermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserHasPermissions to update
     */
    where?: UserHasPermissionWhereInput
  }


  /**
   * UserHasPermission upsert
   */
  export type UserHasPermissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * The filter to search for the UserHasPermission to update in case it exists.
     */
    where: UserHasPermissionWhereUniqueInput
    /**
     * In case the UserHasPermission found by the `where` argument doesn't exist, create a new UserHasPermission with this data.
     */
    create: XOR<UserHasPermissionCreateInput, UserHasPermissionUncheckedCreateInput>
    /**
     * In case the UserHasPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHasPermissionUpdateInput, UserHasPermissionUncheckedUpdateInput>
  }


  /**
   * UserHasPermission delete
   */
  export type UserHasPermissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
    /**
     * Filter which UserHasPermission to delete.
     */
    where: UserHasPermissionWhereUniqueInput
  }


  /**
   * UserHasPermission deleteMany
   */
  export type UserHasPermissionDeleteManyArgs = {
    /**
     * Filter which UserHasPermissions to delete
     */
    where?: UserHasPermissionWhereInput
  }


  /**
   * UserHasPermission without action
   */
  export type UserHasPermissionArgs = {
    /**
     * Select specific fields to fetch from the UserHasPermission
     */
    select?: UserHasPermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserHasPermissionInclude | null
  }



  /**
   * Model ServerAvaliation
   */


  export type AggregateServerAvaliation = {
    _count: ServerAvaliationCountAggregateOutputType | null
    _avg: ServerAvaliationAvgAggregateOutputType | null
    _sum: ServerAvaliationSumAggregateOutputType | null
    _min: ServerAvaliationMinAggregateOutputType | null
    _max: ServerAvaliationMaxAggregateOutputType | null
  }

  export type ServerAvaliationAvgAggregateOutputType = {
    avaliation: number | null
  }

  export type ServerAvaliationSumAggregateOutputType = {
    avaliation: number | null
  }

  export type ServerAvaliationMinAggregateOutputType = {
    id: string | null
    serverId: string | null
    userId: string | null
    avaliation: number | null
    createdAt: Date | null
  }

  export type ServerAvaliationMaxAggregateOutputType = {
    id: string | null
    serverId: string | null
    userId: string | null
    avaliation: number | null
    createdAt: Date | null
  }

  export type ServerAvaliationCountAggregateOutputType = {
    id: number
    serverId: number
    userId: number
    avaliation: number
    createdAt: number
    _all: number
  }


  export type ServerAvaliationAvgAggregateInputType = {
    avaliation?: true
  }

  export type ServerAvaliationSumAggregateInputType = {
    avaliation?: true
  }

  export type ServerAvaliationMinAggregateInputType = {
    id?: true
    serverId?: true
    userId?: true
    avaliation?: true
    createdAt?: true
  }

  export type ServerAvaliationMaxAggregateInputType = {
    id?: true
    serverId?: true
    userId?: true
    avaliation?: true
    createdAt?: true
  }

  export type ServerAvaliationCountAggregateInputType = {
    id?: true
    serverId?: true
    userId?: true
    avaliation?: true
    createdAt?: true
    _all?: true
  }

  export type ServerAvaliationAggregateArgs = {
    /**
     * Filter which ServerAvaliation to aggregate.
     */
    where?: ServerAvaliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerAvaliations to fetch.
     */
    orderBy?: Enumerable<ServerAvaliationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerAvaliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerAvaliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerAvaliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServerAvaliations
    **/
    _count?: true | ServerAvaliationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServerAvaliationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServerAvaliationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerAvaliationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerAvaliationMaxAggregateInputType
  }

  export type GetServerAvaliationAggregateType<T extends ServerAvaliationAggregateArgs> = {
        [P in keyof T & keyof AggregateServerAvaliation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServerAvaliation[P]>
      : GetScalarType<T[P], AggregateServerAvaliation[P]>
  }




  export type ServerAvaliationGroupByArgs = {
    where?: ServerAvaliationWhereInput
    orderBy?: Enumerable<ServerAvaliationOrderByWithAggregationInput>
    by: ServerAvaliationScalarFieldEnum[]
    having?: ServerAvaliationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerAvaliationCountAggregateInputType | true
    _avg?: ServerAvaliationAvgAggregateInputType
    _sum?: ServerAvaliationSumAggregateInputType
    _min?: ServerAvaliationMinAggregateInputType
    _max?: ServerAvaliationMaxAggregateInputType
  }


  export type ServerAvaliationGroupByOutputType = {
    id: string
    serverId: string | null
    userId: string | null
    avaliation: number
    createdAt: Date
    _count: ServerAvaliationCountAggregateOutputType | null
    _avg: ServerAvaliationAvgAggregateOutputType | null
    _sum: ServerAvaliationSumAggregateOutputType | null
    _min: ServerAvaliationMinAggregateOutputType | null
    _max: ServerAvaliationMaxAggregateOutputType | null
  }

  type GetServerAvaliationGroupByPayload<T extends ServerAvaliationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServerAvaliationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerAvaliationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerAvaliationGroupByOutputType[P]>
            : GetScalarType<T[P], ServerAvaliationGroupByOutputType[P]>
        }
      >
    >


  export type ServerAvaliationSelect = {
    id?: boolean
    serverId?: boolean
    userId?: boolean
    avaliation?: boolean
    createdAt?: boolean
    server?: boolean | ServerArgs
    user?: boolean | UserArgs
  }


  export type ServerAvaliationInclude = {
    server?: boolean | ServerArgs
    user?: boolean | UserArgs
  }

  export type ServerAvaliationGetPayload<S extends boolean | null | undefined | ServerAvaliationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ServerAvaliation :
    S extends undefined ? never :
    S extends { include: any } & (ServerAvaliationArgs | ServerAvaliationFindManyArgs)
    ? ServerAvaliation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'server' ? ServerGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ServerAvaliationArgs | ServerAvaliationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'server' ? ServerGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof ServerAvaliation ? ServerAvaliation[P] : never
  } 
      : ServerAvaliation


  type ServerAvaliationCountArgs = 
    Omit<ServerAvaliationFindManyArgs, 'select' | 'include'> & {
      select?: ServerAvaliationCountAggregateInputType | true
    }

  export interface ServerAvaliationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ServerAvaliation that matches the filter.
     * @param {ServerAvaliationFindUniqueArgs} args - Arguments to find a ServerAvaliation
     * @example
     * // Get one ServerAvaliation
     * const serverAvaliation = await prisma.serverAvaliation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServerAvaliationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ServerAvaliationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ServerAvaliation'> extends True ? Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T>> : Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T> | null, null>

    /**
     * Find one ServerAvaliation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServerAvaliationFindUniqueOrThrowArgs} args - Arguments to find a ServerAvaliation
     * @example
     * // Get one ServerAvaliation
     * const serverAvaliation = await prisma.serverAvaliation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServerAvaliationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ServerAvaliationFindUniqueOrThrowArgs>
    ): Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T>>

    /**
     * Find the first ServerAvaliation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAvaliationFindFirstArgs} args - Arguments to find a ServerAvaliation
     * @example
     * // Get one ServerAvaliation
     * const serverAvaliation = await prisma.serverAvaliation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServerAvaliationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ServerAvaliationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ServerAvaliation'> extends True ? Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T>> : Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T> | null, null>

    /**
     * Find the first ServerAvaliation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAvaliationFindFirstOrThrowArgs} args - Arguments to find a ServerAvaliation
     * @example
     * // Get one ServerAvaliation
     * const serverAvaliation = await prisma.serverAvaliation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServerAvaliationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServerAvaliationFindFirstOrThrowArgs>
    ): Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T>>

    /**
     * Find zero or more ServerAvaliations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAvaliationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServerAvaliations
     * const serverAvaliations = await prisma.serverAvaliation.findMany()
     * 
     * // Get first 10 ServerAvaliations
     * const serverAvaliations = await prisma.serverAvaliation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverAvaliationWithIdOnly = await prisma.serverAvaliation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServerAvaliationFindManyArgs>(
      args?: SelectSubset<T, ServerAvaliationFindManyArgs>
    ): Prisma.PrismaPromise<Array<ServerAvaliationGetPayload<T>>>

    /**
     * Create a ServerAvaliation.
     * @param {ServerAvaliationCreateArgs} args - Arguments to create a ServerAvaliation.
     * @example
     * // Create one ServerAvaliation
     * const ServerAvaliation = await prisma.serverAvaliation.create({
     *   data: {
     *     // ... data to create a ServerAvaliation
     *   }
     * })
     * 
    **/
    create<T extends ServerAvaliationCreateArgs>(
      args: SelectSubset<T, ServerAvaliationCreateArgs>
    ): Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T>>

    /**
     * Create many ServerAvaliations.
     *     @param {ServerAvaliationCreateManyArgs} args - Arguments to create many ServerAvaliations.
     *     @example
     *     // Create many ServerAvaliations
     *     const serverAvaliation = await prisma.serverAvaliation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServerAvaliationCreateManyArgs>(
      args?: SelectSubset<T, ServerAvaliationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServerAvaliation.
     * @param {ServerAvaliationDeleteArgs} args - Arguments to delete one ServerAvaliation.
     * @example
     * // Delete one ServerAvaliation
     * const ServerAvaliation = await prisma.serverAvaliation.delete({
     *   where: {
     *     // ... filter to delete one ServerAvaliation
     *   }
     * })
     * 
    **/
    delete<T extends ServerAvaliationDeleteArgs>(
      args: SelectSubset<T, ServerAvaliationDeleteArgs>
    ): Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T>>

    /**
     * Update one ServerAvaliation.
     * @param {ServerAvaliationUpdateArgs} args - Arguments to update one ServerAvaliation.
     * @example
     * // Update one ServerAvaliation
     * const serverAvaliation = await prisma.serverAvaliation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServerAvaliationUpdateArgs>(
      args: SelectSubset<T, ServerAvaliationUpdateArgs>
    ): Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T>>

    /**
     * Delete zero or more ServerAvaliations.
     * @param {ServerAvaliationDeleteManyArgs} args - Arguments to filter ServerAvaliations to delete.
     * @example
     * // Delete a few ServerAvaliations
     * const { count } = await prisma.serverAvaliation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServerAvaliationDeleteManyArgs>(
      args?: SelectSubset<T, ServerAvaliationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerAvaliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAvaliationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServerAvaliations
     * const serverAvaliation = await prisma.serverAvaliation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServerAvaliationUpdateManyArgs>(
      args: SelectSubset<T, ServerAvaliationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServerAvaliation.
     * @param {ServerAvaliationUpsertArgs} args - Arguments to update or create a ServerAvaliation.
     * @example
     * // Update or create a ServerAvaliation
     * const serverAvaliation = await prisma.serverAvaliation.upsert({
     *   create: {
     *     // ... data to create a ServerAvaliation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServerAvaliation we want to update
     *   }
     * })
    **/
    upsert<T extends ServerAvaliationUpsertArgs>(
      args: SelectSubset<T, ServerAvaliationUpsertArgs>
    ): Prisma__ServerAvaliationClient<ServerAvaliationGetPayload<T>>

    /**
     * Count the number of ServerAvaliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAvaliationCountArgs} args - Arguments to filter ServerAvaliations to count.
     * @example
     * // Count the number of ServerAvaliations
     * const count = await prisma.serverAvaliation.count({
     *   where: {
     *     // ... the filter for the ServerAvaliations we want to count
     *   }
     * })
    **/
    count<T extends ServerAvaliationCountArgs>(
      args?: Subset<T, ServerAvaliationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerAvaliationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServerAvaliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAvaliationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServerAvaliationAggregateArgs>(args: Subset<T, ServerAvaliationAggregateArgs>): Prisma.PrismaPromise<GetServerAvaliationAggregateType<T>>

    /**
     * Group by ServerAvaliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAvaliationGroupByArgs} args - Group by arguments.
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
      T extends ServerAvaliationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerAvaliationGroupByArgs['orderBy'] }
        : { orderBy?: ServerAvaliationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServerAvaliationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerAvaliationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ServerAvaliation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ServerAvaliationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    server<T extends ServerArgs= {}>(args?: Subset<T, ServerArgs>): Prisma__ServerClient<ServerGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * ServerAvaliation base type for findUnique actions
   */
  export type ServerAvaliationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * Filter, which ServerAvaliation to fetch.
     */
    where: ServerAvaliationWhereUniqueInput
  }

  /**
   * ServerAvaliation findUnique
   */
  export interface ServerAvaliationFindUniqueArgs extends ServerAvaliationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ServerAvaliation findUniqueOrThrow
   */
  export type ServerAvaliationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * Filter, which ServerAvaliation to fetch.
     */
    where: ServerAvaliationWhereUniqueInput
  }


  /**
   * ServerAvaliation base type for findFirst actions
   */
  export type ServerAvaliationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * Filter, which ServerAvaliation to fetch.
     */
    where?: ServerAvaliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerAvaliations to fetch.
     */
    orderBy?: Enumerable<ServerAvaliationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerAvaliations.
     */
    cursor?: ServerAvaliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerAvaliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerAvaliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerAvaliations.
     */
    distinct?: Enumerable<ServerAvaliationScalarFieldEnum>
  }

  /**
   * ServerAvaliation findFirst
   */
  export interface ServerAvaliationFindFirstArgs extends ServerAvaliationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ServerAvaliation findFirstOrThrow
   */
  export type ServerAvaliationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * Filter, which ServerAvaliation to fetch.
     */
    where?: ServerAvaliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerAvaliations to fetch.
     */
    orderBy?: Enumerable<ServerAvaliationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerAvaliations.
     */
    cursor?: ServerAvaliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerAvaliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerAvaliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerAvaliations.
     */
    distinct?: Enumerable<ServerAvaliationScalarFieldEnum>
  }


  /**
   * ServerAvaliation findMany
   */
  export type ServerAvaliationFindManyArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * Filter, which ServerAvaliations to fetch.
     */
    where?: ServerAvaliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerAvaliations to fetch.
     */
    orderBy?: Enumerable<ServerAvaliationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServerAvaliations.
     */
    cursor?: ServerAvaliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerAvaliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerAvaliations.
     */
    skip?: number
    distinct?: Enumerable<ServerAvaliationScalarFieldEnum>
  }


  /**
   * ServerAvaliation create
   */
  export type ServerAvaliationCreateArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * The data needed to create a ServerAvaliation.
     */
    data: XOR<ServerAvaliationCreateInput, ServerAvaliationUncheckedCreateInput>
  }


  /**
   * ServerAvaliation createMany
   */
  export type ServerAvaliationCreateManyArgs = {
    /**
     * The data used to create many ServerAvaliations.
     */
    data: Enumerable<ServerAvaliationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ServerAvaliation update
   */
  export type ServerAvaliationUpdateArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * The data needed to update a ServerAvaliation.
     */
    data: XOR<ServerAvaliationUpdateInput, ServerAvaliationUncheckedUpdateInput>
    /**
     * Choose, which ServerAvaliation to update.
     */
    where: ServerAvaliationWhereUniqueInput
  }


  /**
   * ServerAvaliation updateMany
   */
  export type ServerAvaliationUpdateManyArgs = {
    /**
     * The data used to update ServerAvaliations.
     */
    data: XOR<ServerAvaliationUpdateManyMutationInput, ServerAvaliationUncheckedUpdateManyInput>
    /**
     * Filter which ServerAvaliations to update
     */
    where?: ServerAvaliationWhereInput
  }


  /**
   * ServerAvaliation upsert
   */
  export type ServerAvaliationUpsertArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * The filter to search for the ServerAvaliation to update in case it exists.
     */
    where: ServerAvaliationWhereUniqueInput
    /**
     * In case the ServerAvaliation found by the `where` argument doesn't exist, create a new ServerAvaliation with this data.
     */
    create: XOR<ServerAvaliationCreateInput, ServerAvaliationUncheckedCreateInput>
    /**
     * In case the ServerAvaliation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerAvaliationUpdateInput, ServerAvaliationUncheckedUpdateInput>
  }


  /**
   * ServerAvaliation delete
   */
  export type ServerAvaliationDeleteArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
    /**
     * Filter which ServerAvaliation to delete.
     */
    where: ServerAvaliationWhereUniqueInput
  }


  /**
   * ServerAvaliation deleteMany
   */
  export type ServerAvaliationDeleteManyArgs = {
    /**
     * Filter which ServerAvaliations to delete
     */
    where?: ServerAvaliationWhereInput
  }


  /**
   * ServerAvaliation without action
   */
  export type ServerAvaliationArgs = {
    /**
     * Select specific fields to fetch from the ServerAvaliation
     */
    select?: ServerAvaliationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServerAvaliationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ServerAvaliationScalarFieldEnum: {
    id: 'id',
    serverId: 'serverId',
    userId: 'userId',
    avaliation: 'avaliation',
    createdAt: 'createdAt'
  };

  export type ServerAvaliationScalarFieldEnum = (typeof ServerAvaliationScalarFieldEnum)[keyof typeof ServerAvaliationScalarFieldEnum]


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


  export const UserHasPermissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    permissionId: 'permissionId',
    createdAt: 'createdAt'
  };

  export type UserHasPermissionScalarFieldEnum = (typeof UserHasPermissionScalarFieldEnum)[keyof typeof UserHasPermissionScalarFieldEnum]


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
    permissions?: UserHasPermissionListRelationFilter
    ServerAvaliation?: ServerAvaliationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    permissions?: UserHasPermissionOrderByRelationAggregateInput
    ServerAvaliation?: ServerAvaliationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
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
    ServerAvaliation?: ServerAvaliationListRelationFilter
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
    ServerAvaliation?: ServerAvaliationOrderByRelationAggregateInput
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

  export type PermissionWhereInput = {
    AND?: Enumerable<PermissionWhereInput>
    OR?: Enumerable<PermissionWhereInput>
    NOT?: Enumerable<PermissionWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    permission?: UserHasPermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    permission?: UserHasPermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = {
    id?: string
  }

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserHasPermissionWhereInput = {
    AND?: Enumerable<UserHasPermissionWhereInput>
    OR?: Enumerable<UserHasPermissionWhereInput>
    NOT?: Enumerable<UserHasPermissionWhereInput>
    id?: StringFilter | string
    userId?: StringNullableFilter | string | null
    permissionId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput> | null
  }

  export type UserHasPermissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type UserHasPermissionWhereUniqueInput = {
    id?: string
  }

  export type UserHasPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    _count?: UserHasPermissionCountOrderByAggregateInput
    _max?: UserHasPermissionMaxOrderByAggregateInput
    _min?: UserHasPermissionMinOrderByAggregateInput
  }

  export type UserHasPermissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserHasPermissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserHasPermissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserHasPermissionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringNullableWithAggregatesFilter | string | null
    permissionId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ServerAvaliationWhereInput = {
    AND?: Enumerable<ServerAvaliationWhereInput>
    OR?: Enumerable<ServerAvaliationWhereInput>
    NOT?: Enumerable<ServerAvaliationWhereInput>
    id?: StringFilter | string
    serverId?: StringNullableFilter | string | null
    userId?: StringNullableFilter | string | null
    avaliation?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    server?: XOR<ServerRelationFilter, ServerWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type ServerAvaliationOrderByWithRelationInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    avaliation?: SortOrder
    createdAt?: SortOrder
    server?: ServerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ServerAvaliationWhereUniqueInput = {
    id?: string
  }

  export type ServerAvaliationOrderByWithAggregationInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    avaliation?: SortOrder
    createdAt?: SortOrder
    _count?: ServerAvaliationCountOrderByAggregateInput
    _avg?: ServerAvaliationAvgOrderByAggregateInput
    _max?: ServerAvaliationMaxOrderByAggregateInput
    _min?: ServerAvaliationMinOrderByAggregateInput
    _sum?: ServerAvaliationSumOrderByAggregateInput
  }

  export type ServerAvaliationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ServerAvaliationScalarWhereWithAggregatesInput>
    OR?: Enumerable<ServerAvaliationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ServerAvaliationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    serverId?: StringNullableWithAggregatesFilter | string | null
    userId?: StringNullableWithAggregatesFilter | string | null
    avaliation?: FloatWithAggregatesFilter | number
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
    permissions?: UserHasPermissionCreateNestedManyWithoutUserInput
    ServerAvaliation?: ServerAvaliationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string | null
    email: string
    name: string
    birth: Date | string
    phone?: string | null
    password: string
    createdAt?: Date | string
    permissions?: UserHasPermissionUncheckedCreateNestedManyWithoutUserInput
    ServerAvaliation?: ServerAvaliationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserHasPermissionUpdateManyWithoutUserNestedInput
    ServerAvaliation?: ServerAvaliationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserHasPermissionUncheckedUpdateManyWithoutUserNestedInput
    ServerAvaliation?: ServerAvaliationUncheckedUpdateManyWithoutUserNestedInput
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
    ServerAvaliation?: ServerAvaliationCreateNestedManyWithoutServerInput
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
    ServerAvaliation?: ServerAvaliationUncheckedCreateNestedManyWithoutServerInput
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
    ServerAvaliation?: ServerAvaliationUpdateManyWithoutServerNestedInput
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
    ServerAvaliation?: ServerAvaliationUncheckedUpdateManyWithoutServerNestedInput
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

  export type PermissionCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    permission?: UserHasPermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    permission?: UserHasPermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: UserHasPermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: UserHasPermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHasPermissionCreateInput = {
    id?: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPermissionsInput
    permission?: PermissionCreateNestedOneWithoutPermissionInput
  }

  export type UserHasPermissionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    permissionId?: string | null
    createdAt?: Date | string
  }

  export type UserHasPermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPermissionsNestedInput
    permission?: PermissionUpdateOneWithoutPermissionNestedInput
  }

  export type UserHasPermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    permissionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHasPermissionCreateManyInput = {
    id?: string
    userId?: string | null
    permissionId?: string | null
    createdAt?: Date | string
  }

  export type UserHasPermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHasPermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    permissionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerAvaliationCreateInput = {
    id?: string
    avaliation: number
    createdAt?: Date | string
    server?: ServerCreateNestedOneWithoutServerAvaliationInput
    user?: UserCreateNestedOneWithoutServerAvaliationInput
  }

  export type ServerAvaliationUncheckedCreateInput = {
    id?: string
    serverId?: string | null
    userId?: string | null
    avaliation: number
    createdAt?: Date | string
  }

  export type ServerAvaliationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avaliation?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServerUpdateOneWithoutServerAvaliationNestedInput
    user?: UserUpdateOneWithoutServerAvaliationNestedInput
  }

  export type ServerAvaliationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    avaliation?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerAvaliationCreateManyInput = {
    id?: string
    serverId?: string | null
    userId?: string | null
    avaliation: number
    createdAt?: Date | string
  }

  export type ServerAvaliationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    avaliation?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerAvaliationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    avaliation?: FloatFieldUpdateOperationsInput | number
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

  export type UserHasPermissionListRelationFilter = {
    every?: UserHasPermissionWhereInput
    some?: UserHasPermissionWhereInput
    none?: UserHasPermissionWhereInput
  }

  export type ServerAvaliationListRelationFilter = {
    every?: ServerAvaliationWhereInput
    some?: ServerAvaliationWhereInput
    none?: ServerAvaliationWhereInput
  }

  export type UserHasPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServerAvaliationOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PermissionRelationFilter = {
    is?: PermissionWhereInput | null
    isNot?: PermissionWhereInput | null
  }

  export type UserHasPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserHasPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserHasPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ServerAvaliationCountOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    avaliation?: SortOrder
    createdAt?: SortOrder
  }

  export type ServerAvaliationAvgOrderByAggregateInput = {
    avaliation?: SortOrder
  }

  export type ServerAvaliationMaxOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    avaliation?: SortOrder
    createdAt?: SortOrder
  }

  export type ServerAvaliationMinOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    avaliation?: SortOrder
    createdAt?: SortOrder
  }

  export type ServerAvaliationSumOrderByAggregateInput = {
    avaliation?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type UserHasPermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserHasPermissionCreateWithoutUserInput>, Enumerable<UserHasPermissionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserHasPermissionCreateOrConnectWithoutUserInput>
    createMany?: UserHasPermissionCreateManyUserInputEnvelope
    connect?: Enumerable<UserHasPermissionWhereUniqueInput>
  }

  export type ServerAvaliationCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ServerAvaliationCreateWithoutUserInput>, Enumerable<ServerAvaliationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ServerAvaliationCreateOrConnectWithoutUserInput>
    createMany?: ServerAvaliationCreateManyUserInputEnvelope
    connect?: Enumerable<ServerAvaliationWhereUniqueInput>
  }

  export type UserHasPermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserHasPermissionCreateWithoutUserInput>, Enumerable<UserHasPermissionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserHasPermissionCreateOrConnectWithoutUserInput>
    createMany?: UserHasPermissionCreateManyUserInputEnvelope
    connect?: Enumerable<UserHasPermissionWhereUniqueInput>
  }

  export type ServerAvaliationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ServerAvaliationCreateWithoutUserInput>, Enumerable<ServerAvaliationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ServerAvaliationCreateOrConnectWithoutUserInput>
    createMany?: ServerAvaliationCreateManyUserInputEnvelope
    connect?: Enumerable<ServerAvaliationWhereUniqueInput>
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

  export type UserHasPermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserHasPermissionCreateWithoutUserInput>, Enumerable<UserHasPermissionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserHasPermissionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserHasPermissionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserHasPermissionCreateManyUserInputEnvelope
    set?: Enumerable<UserHasPermissionWhereUniqueInput>
    disconnect?: Enumerable<UserHasPermissionWhereUniqueInput>
    delete?: Enumerable<UserHasPermissionWhereUniqueInput>
    connect?: Enumerable<UserHasPermissionWhereUniqueInput>
    update?: Enumerable<UserHasPermissionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserHasPermissionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserHasPermissionScalarWhereInput>
  }

  export type ServerAvaliationUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ServerAvaliationCreateWithoutUserInput>, Enumerable<ServerAvaliationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ServerAvaliationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ServerAvaliationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ServerAvaliationCreateManyUserInputEnvelope
    set?: Enumerable<ServerAvaliationWhereUniqueInput>
    disconnect?: Enumerable<ServerAvaliationWhereUniqueInput>
    delete?: Enumerable<ServerAvaliationWhereUniqueInput>
    connect?: Enumerable<ServerAvaliationWhereUniqueInput>
    update?: Enumerable<ServerAvaliationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ServerAvaliationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ServerAvaliationScalarWhereInput>
  }

  export type UserHasPermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserHasPermissionCreateWithoutUserInput>, Enumerable<UserHasPermissionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserHasPermissionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserHasPermissionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserHasPermissionCreateManyUserInputEnvelope
    set?: Enumerable<UserHasPermissionWhereUniqueInput>
    disconnect?: Enumerable<UserHasPermissionWhereUniqueInput>
    delete?: Enumerable<UserHasPermissionWhereUniqueInput>
    connect?: Enumerable<UserHasPermissionWhereUniqueInput>
    update?: Enumerable<UserHasPermissionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserHasPermissionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserHasPermissionScalarWhereInput>
  }

  export type ServerAvaliationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ServerAvaliationCreateWithoutUserInput>, Enumerable<ServerAvaliationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ServerAvaliationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ServerAvaliationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ServerAvaliationCreateManyUserInputEnvelope
    set?: Enumerable<ServerAvaliationWhereUniqueInput>
    disconnect?: Enumerable<ServerAvaliationWhereUniqueInput>
    delete?: Enumerable<ServerAvaliationWhereUniqueInput>
    connect?: Enumerable<ServerAvaliationWhereUniqueInput>
    update?: Enumerable<ServerAvaliationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ServerAvaliationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ServerAvaliationScalarWhereInput>
  }

  export type ServerTagsCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<ServerTagsCreateWithoutServerInput>, Enumerable<ServerTagsUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerTagsCreateOrConnectWithoutServerInput>
    createMany?: ServerTagsCreateManyServerInputEnvelope
    connect?: Enumerable<ServerTagsWhereUniqueInput>
  }

  export type ServerAvaliationCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<ServerAvaliationCreateWithoutServerInput>, Enumerable<ServerAvaliationUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerAvaliationCreateOrConnectWithoutServerInput>
    createMany?: ServerAvaliationCreateManyServerInputEnvelope
    connect?: Enumerable<ServerAvaliationWhereUniqueInput>
  }

  export type ServerTagsUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<ServerTagsCreateWithoutServerInput>, Enumerable<ServerTagsUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerTagsCreateOrConnectWithoutServerInput>
    createMany?: ServerTagsCreateManyServerInputEnvelope
    connect?: Enumerable<ServerTagsWhereUniqueInput>
  }

  export type ServerAvaliationUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<ServerAvaliationCreateWithoutServerInput>, Enumerable<ServerAvaliationUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerAvaliationCreateOrConnectWithoutServerInput>
    createMany?: ServerAvaliationCreateManyServerInputEnvelope
    connect?: Enumerable<ServerAvaliationWhereUniqueInput>
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

  export type ServerAvaliationUpdateManyWithoutServerNestedInput = {
    create?: XOR<Enumerable<ServerAvaliationCreateWithoutServerInput>, Enumerable<ServerAvaliationUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerAvaliationCreateOrConnectWithoutServerInput>
    upsert?: Enumerable<ServerAvaliationUpsertWithWhereUniqueWithoutServerInput>
    createMany?: ServerAvaliationCreateManyServerInputEnvelope
    set?: Enumerable<ServerAvaliationWhereUniqueInput>
    disconnect?: Enumerable<ServerAvaliationWhereUniqueInput>
    delete?: Enumerable<ServerAvaliationWhereUniqueInput>
    connect?: Enumerable<ServerAvaliationWhereUniqueInput>
    update?: Enumerable<ServerAvaliationUpdateWithWhereUniqueWithoutServerInput>
    updateMany?: Enumerable<ServerAvaliationUpdateManyWithWhereWithoutServerInput>
    deleteMany?: Enumerable<ServerAvaliationScalarWhereInput>
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

  export type ServerAvaliationUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<Enumerable<ServerAvaliationCreateWithoutServerInput>, Enumerable<ServerAvaliationUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<ServerAvaliationCreateOrConnectWithoutServerInput>
    upsert?: Enumerable<ServerAvaliationUpsertWithWhereUniqueWithoutServerInput>
    createMany?: ServerAvaliationCreateManyServerInputEnvelope
    set?: Enumerable<ServerAvaliationWhereUniqueInput>
    disconnect?: Enumerable<ServerAvaliationWhereUniqueInput>
    delete?: Enumerable<ServerAvaliationWhereUniqueInput>
    connect?: Enumerable<ServerAvaliationWhereUniqueInput>
    update?: Enumerable<ServerAvaliationUpdateWithWhereUniqueWithoutServerInput>
    updateMany?: Enumerable<ServerAvaliationUpdateManyWithWhereWithoutServerInput>
    deleteMany?: Enumerable<ServerAvaliationScalarWhereInput>
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

  export type UserHasPermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Enumerable<UserHasPermissionCreateWithoutPermissionInput>, Enumerable<UserHasPermissionUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<UserHasPermissionCreateOrConnectWithoutPermissionInput>
    createMany?: UserHasPermissionCreateManyPermissionInputEnvelope
    connect?: Enumerable<UserHasPermissionWhereUniqueInput>
  }

  export type UserHasPermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Enumerable<UserHasPermissionCreateWithoutPermissionInput>, Enumerable<UserHasPermissionUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<UserHasPermissionCreateOrConnectWithoutPermissionInput>
    createMany?: UserHasPermissionCreateManyPermissionInputEnvelope
    connect?: Enumerable<UserHasPermissionWhereUniqueInput>
  }

  export type UserHasPermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Enumerable<UserHasPermissionCreateWithoutPermissionInput>, Enumerable<UserHasPermissionUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<UserHasPermissionCreateOrConnectWithoutPermissionInput>
    upsert?: Enumerable<UserHasPermissionUpsertWithWhereUniqueWithoutPermissionInput>
    createMany?: UserHasPermissionCreateManyPermissionInputEnvelope
    set?: Enumerable<UserHasPermissionWhereUniqueInput>
    disconnect?: Enumerable<UserHasPermissionWhereUniqueInput>
    delete?: Enumerable<UserHasPermissionWhereUniqueInput>
    connect?: Enumerable<UserHasPermissionWhereUniqueInput>
    update?: Enumerable<UserHasPermissionUpdateWithWhereUniqueWithoutPermissionInput>
    updateMany?: Enumerable<UserHasPermissionUpdateManyWithWhereWithoutPermissionInput>
    deleteMany?: Enumerable<UserHasPermissionScalarWhereInput>
  }

  export type UserHasPermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Enumerable<UserHasPermissionCreateWithoutPermissionInput>, Enumerable<UserHasPermissionUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<UserHasPermissionCreateOrConnectWithoutPermissionInput>
    upsert?: Enumerable<UserHasPermissionUpsertWithWhereUniqueWithoutPermissionInput>
    createMany?: UserHasPermissionCreateManyPermissionInputEnvelope
    set?: Enumerable<UserHasPermissionWhereUniqueInput>
    disconnect?: Enumerable<UserHasPermissionWhereUniqueInput>
    delete?: Enumerable<UserHasPermissionWhereUniqueInput>
    connect?: Enumerable<UserHasPermissionWhereUniqueInput>
    update?: Enumerable<UserHasPermissionUpdateWithWhereUniqueWithoutPermissionInput>
    updateMany?: Enumerable<UserHasPermissionUpdateManyWithWhereWithoutPermissionInput>
    deleteMany?: Enumerable<UserHasPermissionScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutPermissionInput = {
    create?: XOR<PermissionCreateWithoutPermissionInput, PermissionUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutPermissionInput
    connect?: PermissionWhereUniqueInput
  }

  export type UserUpdateOneWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    upsert?: UserUpsertWithoutPermissionsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type PermissionUpdateOneWithoutPermissionNestedInput = {
    create?: XOR<PermissionCreateWithoutPermissionInput, PermissionUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutPermissionInput
    upsert?: PermissionUpsertWithoutPermissionInput
    disconnect?: boolean
    delete?: boolean
    connect?: PermissionWhereUniqueInput
    update?: XOR<PermissionUpdateWithoutPermissionInput, PermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type ServerCreateNestedOneWithoutServerAvaliationInput = {
    create?: XOR<ServerCreateWithoutServerAvaliationInput, ServerUncheckedCreateWithoutServerAvaliationInput>
    connectOrCreate?: ServerCreateOrConnectWithoutServerAvaliationInput
    connect?: ServerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutServerAvaliationInput = {
    create?: XOR<UserCreateWithoutServerAvaliationInput, UserUncheckedCreateWithoutServerAvaliationInput>
    connectOrCreate?: UserCreateOrConnectWithoutServerAvaliationInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServerUpdateOneWithoutServerAvaliationNestedInput = {
    create?: XOR<ServerCreateWithoutServerAvaliationInput, ServerUncheckedCreateWithoutServerAvaliationInput>
    connectOrCreate?: ServerCreateOrConnectWithoutServerAvaliationInput
    upsert?: ServerUpsertWithoutServerAvaliationInput
    disconnect?: boolean
    delete?: boolean
    connect?: ServerWhereUniqueInput
    update?: XOR<ServerUpdateWithoutServerAvaliationInput, ServerUncheckedUpdateWithoutServerAvaliationInput>
  }

  export type UserUpdateOneWithoutServerAvaliationNestedInput = {
    create?: XOR<UserCreateWithoutServerAvaliationInput, UserUncheckedCreateWithoutServerAvaliationInput>
    connectOrCreate?: UserCreateOrConnectWithoutServerAvaliationInput
    upsert?: UserUpsertWithoutServerAvaliationInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutServerAvaliationInput, UserUncheckedUpdateWithoutServerAvaliationInput>
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

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type UserHasPermissionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    permission?: PermissionCreateNestedOneWithoutPermissionInput
  }

  export type UserHasPermissionUncheckedCreateWithoutUserInput = {
    id?: string
    permissionId?: string | null
    createdAt?: Date | string
  }

  export type UserHasPermissionCreateOrConnectWithoutUserInput = {
    where: UserHasPermissionWhereUniqueInput
    create: XOR<UserHasPermissionCreateWithoutUserInput, UserHasPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserHasPermissionCreateManyUserInputEnvelope = {
    data: Enumerable<UserHasPermissionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ServerAvaliationCreateWithoutUserInput = {
    id?: string
    avaliation: number
    createdAt?: Date | string
    server?: ServerCreateNestedOneWithoutServerAvaliationInput
  }

  export type ServerAvaliationUncheckedCreateWithoutUserInput = {
    id?: string
    serverId?: string | null
    avaliation: number
    createdAt?: Date | string
  }

  export type ServerAvaliationCreateOrConnectWithoutUserInput = {
    where: ServerAvaliationWhereUniqueInput
    create: XOR<ServerAvaliationCreateWithoutUserInput, ServerAvaliationUncheckedCreateWithoutUserInput>
  }

  export type ServerAvaliationCreateManyUserInputEnvelope = {
    data: Enumerable<ServerAvaliationCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserHasPermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHasPermissionWhereUniqueInput
    update: XOR<UserHasPermissionUpdateWithoutUserInput, UserHasPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<UserHasPermissionCreateWithoutUserInput, UserHasPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserHasPermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHasPermissionWhereUniqueInput
    data: XOR<UserHasPermissionUpdateWithoutUserInput, UserHasPermissionUncheckedUpdateWithoutUserInput>
  }

  export type UserHasPermissionUpdateManyWithWhereWithoutUserInput = {
    where: UserHasPermissionScalarWhereInput
    data: XOR<UserHasPermissionUpdateManyMutationInput, UserHasPermissionUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type UserHasPermissionScalarWhereInput = {
    AND?: Enumerable<UserHasPermissionScalarWhereInput>
    OR?: Enumerable<UserHasPermissionScalarWhereInput>
    NOT?: Enumerable<UserHasPermissionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringNullableFilter | string | null
    permissionId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type ServerAvaliationUpsertWithWhereUniqueWithoutUserInput = {
    where: ServerAvaliationWhereUniqueInput
    update: XOR<ServerAvaliationUpdateWithoutUserInput, ServerAvaliationUncheckedUpdateWithoutUserInput>
    create: XOR<ServerAvaliationCreateWithoutUserInput, ServerAvaliationUncheckedCreateWithoutUserInput>
  }

  export type ServerAvaliationUpdateWithWhereUniqueWithoutUserInput = {
    where: ServerAvaliationWhereUniqueInput
    data: XOR<ServerAvaliationUpdateWithoutUserInput, ServerAvaliationUncheckedUpdateWithoutUserInput>
  }

  export type ServerAvaliationUpdateManyWithWhereWithoutUserInput = {
    where: ServerAvaliationScalarWhereInput
    data: XOR<ServerAvaliationUpdateManyMutationInput, ServerAvaliationUncheckedUpdateManyWithoutServerAvaliationInput>
  }

  export type ServerAvaliationScalarWhereInput = {
    AND?: Enumerable<ServerAvaliationScalarWhereInput>
    OR?: Enumerable<ServerAvaliationScalarWhereInput>
    NOT?: Enumerable<ServerAvaliationScalarWhereInput>
    id?: StringFilter | string
    serverId?: StringNullableFilter | string | null
    userId?: StringNullableFilter | string | null
    avaliation?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
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

  export type ServerAvaliationCreateWithoutServerInput = {
    id?: string
    avaliation: number
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutServerAvaliationInput
  }

  export type ServerAvaliationUncheckedCreateWithoutServerInput = {
    id?: string
    userId?: string | null
    avaliation: number
    createdAt?: Date | string
  }

  export type ServerAvaliationCreateOrConnectWithoutServerInput = {
    where: ServerAvaliationWhereUniqueInput
    create: XOR<ServerAvaliationCreateWithoutServerInput, ServerAvaliationUncheckedCreateWithoutServerInput>
  }

  export type ServerAvaliationCreateManyServerInputEnvelope = {
    data: Enumerable<ServerAvaliationCreateManyServerInput>
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

  export type ServerAvaliationUpsertWithWhereUniqueWithoutServerInput = {
    where: ServerAvaliationWhereUniqueInput
    update: XOR<ServerAvaliationUpdateWithoutServerInput, ServerAvaliationUncheckedUpdateWithoutServerInput>
    create: XOR<ServerAvaliationCreateWithoutServerInput, ServerAvaliationUncheckedCreateWithoutServerInput>
  }

  export type ServerAvaliationUpdateWithWhereUniqueWithoutServerInput = {
    where: ServerAvaliationWhereUniqueInput
    data: XOR<ServerAvaliationUpdateWithoutServerInput, ServerAvaliationUncheckedUpdateWithoutServerInput>
  }

  export type ServerAvaliationUpdateManyWithWhereWithoutServerInput = {
    where: ServerAvaliationScalarWhereInput
    data: XOR<ServerAvaliationUpdateManyMutationInput, ServerAvaliationUncheckedUpdateManyWithoutServerAvaliationInput>
  }

  export type ServerCreateWithoutTagsInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
    ServerAvaliation?: ServerAvaliationCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
    ServerAvaliation?: ServerAvaliationUncheckedCreateNestedManyWithoutServerInput
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
    ServerAvaliation?: ServerAvaliationUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ServerAvaliation?: ServerAvaliationUncheckedUpdateManyWithoutServerNestedInput
  }

  export type UserHasPermissionCreateWithoutPermissionInput = {
    id?: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPermissionsInput
  }

  export type UserHasPermissionUncheckedCreateWithoutPermissionInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type UserHasPermissionCreateOrConnectWithoutPermissionInput = {
    where: UserHasPermissionWhereUniqueInput
    create: XOR<UserHasPermissionCreateWithoutPermissionInput, UserHasPermissionUncheckedCreateWithoutPermissionInput>
  }

  export type UserHasPermissionCreateManyPermissionInputEnvelope = {
    data: Enumerable<UserHasPermissionCreateManyPermissionInput>
    skipDuplicates?: boolean
  }

  export type UserHasPermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: UserHasPermissionWhereUniqueInput
    update: XOR<UserHasPermissionUpdateWithoutPermissionInput, UserHasPermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<UserHasPermissionCreateWithoutPermissionInput, UserHasPermissionUncheckedCreateWithoutPermissionInput>
  }

  export type UserHasPermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: UserHasPermissionWhereUniqueInput
    data: XOR<UserHasPermissionUpdateWithoutPermissionInput, UserHasPermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type UserHasPermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: UserHasPermissionScalarWhereInput
    data: XOR<UserHasPermissionUpdateManyMutationInput, UserHasPermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type UserCreateWithoutPermissionsInput = {
    id?: string | null
    email: string
    name: string
    birth: Date | string
    phone?: string | null
    password: string
    createdAt?: Date | string
    ServerAvaliation?: ServerAvaliationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPermissionsInput = {
    id?: string | null
    email: string
    name: string
    birth: Date | string
    phone?: string | null
    password: string
    createdAt?: Date | string
    ServerAvaliation?: ServerAvaliationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type PermissionCreateWithoutPermissionInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutPermissionInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutPermissionInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutPermissionInput, PermissionUncheckedCreateWithoutPermissionInput>
  }

  export type UserUpsertWithoutPermissionsInput = {
    update: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpdateWithoutPermissionsInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ServerAvaliation?: ServerAvaliationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPermissionsInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ServerAvaliation?: ServerAvaliationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PermissionUpsertWithoutPermissionInput = {
    update: XOR<PermissionUpdateWithoutPermissionInput, PermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<PermissionCreateWithoutPermissionInput, PermissionUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerCreateWithoutServerAvaliationInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
    tags?: ServerTagsCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutServerAvaliationInput = {
    id?: string
    name: string
    discord_channel: string
    contact?: string | null
    description?: string | null
    logo?: string | null
    createdAt?: Date | string
    tags?: ServerTagsUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutServerAvaliationInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutServerAvaliationInput, ServerUncheckedCreateWithoutServerAvaliationInput>
  }

  export type UserCreateWithoutServerAvaliationInput = {
    id?: string | null
    email: string
    name: string
    birth: Date | string
    phone?: string | null
    password: string
    createdAt?: Date | string
    permissions?: UserHasPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServerAvaliationInput = {
    id?: string | null
    email: string
    name: string
    birth: Date | string
    phone?: string | null
    password: string
    createdAt?: Date | string
    permissions?: UserHasPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServerAvaliationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServerAvaliationInput, UserUncheckedCreateWithoutServerAvaliationInput>
  }

  export type ServerUpsertWithoutServerAvaliationInput = {
    update: XOR<ServerUpdateWithoutServerAvaliationInput, ServerUncheckedUpdateWithoutServerAvaliationInput>
    create: XOR<ServerCreateWithoutServerAvaliationInput, ServerUncheckedCreateWithoutServerAvaliationInput>
  }

  export type ServerUpdateWithoutServerAvaliationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ServerTagsUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutServerAvaliationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discord_channel?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ServerTagsUncheckedUpdateManyWithoutServerNestedInput
  }

  export type UserUpsertWithoutServerAvaliationInput = {
    update: XOR<UserUpdateWithoutServerAvaliationInput, UserUncheckedUpdateWithoutServerAvaliationInput>
    create: XOR<UserCreateWithoutServerAvaliationInput, UserUncheckedCreateWithoutServerAvaliationInput>
  }

  export type UserUpdateWithoutServerAvaliationInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserHasPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServerAvaliationInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserHasPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserHasPermissionCreateManyUserInput = {
    id?: string
    permissionId?: string | null
    createdAt?: Date | string
  }

  export type ServerAvaliationCreateManyUserInput = {
    id?: string
    serverId?: string | null
    avaliation: number
    createdAt?: Date | string
  }

  export type UserHasPermissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneWithoutPermissionNestedInput
  }

  export type UserHasPermissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHasPermissionUncheckedUpdateManyWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerAvaliationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    avaliation?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServerUpdateOneWithoutServerAvaliationNestedInput
  }

  export type ServerAvaliationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    avaliation?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerAvaliationUncheckedUpdateManyWithoutServerAvaliationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    avaliation?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerTagsCreateManyServerInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ServerAvaliationCreateManyServerInput = {
    id?: string
    userId?: string | null
    avaliation: number
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

  export type ServerAvaliationUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    avaliation?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutServerAvaliationNestedInput
  }

  export type ServerAvaliationUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    avaliation?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHasPermissionCreateManyPermissionInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type UserHasPermissionUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPermissionsNestedInput
  }

  export type UserHasPermissionUncheckedUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHasPermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
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