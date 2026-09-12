
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model MessageLog
 * 
 */
export type MessageLog = $Result.DefaultSelection<Prisma.$MessageLogPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Segment
 * 
 */
export type Segment = $Result.DefaultSelection<Prisma.$SegmentPayload>
/**
 * Model SmsReply
 * 
 */
export type SmsReply = $Result.DefaultSelection<Prisma.$SmsReplyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageLog`: Exposes CRUD operations for the **MessageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageLogs
    * const messageLogs = await prisma.messageLog.findMany()
    * ```
    */
  get messageLog(): Prisma.MessageLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.segment`: Exposes CRUD operations for the **Segment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Segments
    * const segments = await prisma.segment.findMany()
    * ```
    */
  get segment(): Prisma.SegmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.smsReply`: Exposes CRUD operations for the **SmsReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmsReplies
    * const smsReplies = await prisma.smsReply.findMany()
    * ```
    */
  get smsReply(): Prisma.SmsReplyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Campaign: 'Campaign',
    MessageLog: 'MessageLog',
    Contact: 'Contact',
    Segment: 'Segment',
    SmsReply: 'SmsReply'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campaign" | "messageLog" | "contact" | "segment" | "smsReply"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      MessageLog: {
        payload: Prisma.$MessageLogPayload<ExtArgs>
        fields: Prisma.MessageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          findFirst: {
            args: Prisma.MessageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          findMany: {
            args: Prisma.MessageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          create: {
            args: Prisma.MessageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          createMany: {
            args: Prisma.MessageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          delete: {
            args: Prisma.MessageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          update: {
            args: Prisma.MessageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          deleteMany: {
            args: Prisma.MessageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          upsert: {
            args: Prisma.MessageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          aggregate: {
            args: Prisma.MessageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageLog>
          }
          groupBy: {
            args: Prisma.MessageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageLogCountArgs<ExtArgs>
            result: $Utils.Optional<MessageLogCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Segment: {
        payload: Prisma.$SegmentPayload<ExtArgs>
        fields: Prisma.SegmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SegmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SegmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          findFirst: {
            args: Prisma.SegmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SegmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          findMany: {
            args: Prisma.SegmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>[]
          }
          create: {
            args: Prisma.SegmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          createMany: {
            args: Prisma.SegmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SegmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>[]
          }
          delete: {
            args: Prisma.SegmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          update: {
            args: Prisma.SegmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          deleteMany: {
            args: Prisma.SegmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SegmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SegmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>[]
          }
          upsert: {
            args: Prisma.SegmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          aggregate: {
            args: Prisma.SegmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSegment>
          }
          groupBy: {
            args: Prisma.SegmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SegmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SegmentCountArgs<ExtArgs>
            result: $Utils.Optional<SegmentCountAggregateOutputType> | number
          }
        }
      }
      SmsReply: {
        payload: Prisma.$SmsReplyPayload<ExtArgs>
        fields: Prisma.SmsReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmsReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmsReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>
          }
          findFirst: {
            args: Prisma.SmsReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmsReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>
          }
          findMany: {
            args: Prisma.SmsReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>[]
          }
          create: {
            args: Prisma.SmsReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>
          }
          createMany: {
            args: Prisma.SmsReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmsReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>[]
          }
          delete: {
            args: Prisma.SmsReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>
          }
          update: {
            args: Prisma.SmsReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>
          }
          deleteMany: {
            args: Prisma.SmsReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmsReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SmsReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>[]
          }
          upsert: {
            args: Prisma.SmsReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsReplyPayload>
          }
          aggregate: {
            args: Prisma.SmsReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmsReply>
          }
          groupBy: {
            args: Prisma.SmsReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmsReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmsReplyCountArgs<ExtArgs>
            result: $Utils.Optional<SmsReplyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    campaign?: CampaignOmit
    messageLog?: MessageLogOmit
    contact?: ContactOmit
    segment?: SegmentOmit
    smsReply?: SmsReplyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    logs: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | CampaignCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    segments: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | ContactCountOutputTypeCountSegmentsArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
  }


  /**
   * Count Type SegmentCountOutputType
   */

  export type SegmentCountOutputType = {
    contacts: number
    campaigns: number
  }

  export type SegmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | SegmentCountOutputTypeCountContactsArgs
    campaigns?: boolean | SegmentCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * SegmentCountOutputType without action
   */
  export type SegmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentCountOutputType
     */
    select?: SegmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SegmentCountOutputType without action
   */
  export type SegmentCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * SegmentCountOutputType without action
   */
  export type SegmentCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    platform: string | null
    provider: string | null
    providerConfig: string | null
    message: string | null
    metaToken: string | null
    adminId: string | null
    isTemplate: boolean | null
    templateLanguage: string | null
    messageTag: string | null
    subject: string | null
    audioUrl: string | null
    status: string | null
    scheduledAt: Date | null
    segmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    platform: string | null
    provider: string | null
    providerConfig: string | null
    message: string | null
    metaToken: string | null
    adminId: string | null
    isTemplate: boolean | null
    templateLanguage: string | null
    messageTag: string | null
    subject: string | null
    audioUrl: string | null
    status: string | null
    scheduledAt: Date | null
    segmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    platform: number
    provider: number
    providerConfig: number
    message: number
    metaToken: number
    adminId: number
    isTemplate: number
    templateLanguage: number
    messageTag: number
    subject: number
    audioUrl: number
    status: number
    scheduledAt: number
    segmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    provider?: true
    providerConfig?: true
    message?: true
    metaToken?: true
    adminId?: true
    isTemplate?: true
    templateLanguage?: true
    messageTag?: true
    subject?: true
    audioUrl?: true
    status?: true
    scheduledAt?: true
    segmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    provider?: true
    providerConfig?: true
    message?: true
    metaToken?: true
    adminId?: true
    isTemplate?: true
    templateLanguage?: true
    messageTag?: true
    subject?: true
    audioUrl?: true
    status?: true
    scheduledAt?: true
    segmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    provider?: true
    providerConfig?: true
    message?: true
    metaToken?: true
    adminId?: true
    isTemplate?: true
    templateLanguage?: true
    messageTag?: true
    subject?: true
    audioUrl?: true
    status?: true
    scheduledAt?: true
    segmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    platform: string
    provider: string | null
    providerConfig: string | null
    message: string
    metaToken: string | null
    adminId: string | null
    isTemplate: boolean
    templateLanguage: string | null
    messageTag: string | null
    subject: string | null
    audioUrl: string | null
    status: string
    scheduledAt: Date | null
    segmentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    provider?: boolean
    providerConfig?: boolean
    message?: boolean
    metaToken?: boolean
    adminId?: boolean
    isTemplate?: boolean
    templateLanguage?: boolean
    messageTag?: boolean
    subject?: boolean
    audioUrl?: boolean
    status?: boolean
    scheduledAt?: boolean
    segmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logs?: boolean | Campaign$logsArgs<ExtArgs>
    segment?: boolean | Campaign$segmentArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    provider?: boolean
    providerConfig?: boolean
    message?: boolean
    metaToken?: boolean
    adminId?: boolean
    isTemplate?: boolean
    templateLanguage?: boolean
    messageTag?: boolean
    subject?: boolean
    audioUrl?: boolean
    status?: boolean
    scheduledAt?: boolean
    segmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    segment?: boolean | Campaign$segmentArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    provider?: boolean
    providerConfig?: boolean
    message?: boolean
    metaToken?: boolean
    adminId?: boolean
    isTemplate?: boolean
    templateLanguage?: boolean
    messageTag?: boolean
    subject?: boolean
    audioUrl?: boolean
    status?: boolean
    scheduledAt?: boolean
    segmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    segment?: boolean | Campaign$segmentArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    platform?: boolean
    provider?: boolean
    providerConfig?: boolean
    message?: boolean
    metaToken?: boolean
    adminId?: boolean
    isTemplate?: boolean
    templateLanguage?: boolean
    messageTag?: boolean
    subject?: boolean
    audioUrl?: boolean
    status?: boolean
    scheduledAt?: boolean
    segmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "platform" | "provider" | "providerConfig" | "message" | "metaToken" | "adminId" | "isTemplate" | "templateLanguage" | "messageTag" | "subject" | "audioUrl" | "status" | "scheduledAt" | "segmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Campaign$logsArgs<ExtArgs>
    segment?: boolean | Campaign$segmentArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segment?: boolean | Campaign$segmentArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segment?: boolean | Campaign$segmentArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      logs: Prisma.$MessageLogPayload<ExtArgs>[]
      segment: Prisma.$SegmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      platform: string
      provider: string | null
      providerConfig: string | null
      message: string
      metaToken: string | null
      adminId: string | null
      isTemplate: boolean
      templateLanguage: string | null
      messageTag: string | null
      subject: string | null
      audioUrl: string | null
      status: string
      scheduledAt: Date | null
      segmentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Campaign$logsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    segment<T extends Campaign$segmentArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$segmentArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly platform: FieldRef<"Campaign", 'String'>
    readonly provider: FieldRef<"Campaign", 'String'>
    readonly providerConfig: FieldRef<"Campaign", 'String'>
    readonly message: FieldRef<"Campaign", 'String'>
    readonly metaToken: FieldRef<"Campaign", 'String'>
    readonly adminId: FieldRef<"Campaign", 'String'>
    readonly isTemplate: FieldRef<"Campaign", 'Boolean'>
    readonly templateLanguage: FieldRef<"Campaign", 'String'>
    readonly messageTag: FieldRef<"Campaign", 'String'>
    readonly subject: FieldRef<"Campaign", 'String'>
    readonly audioUrl: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'String'>
    readonly scheduledAt: FieldRef<"Campaign", 'DateTime'>
    readonly segmentId: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.logs
   */
  export type Campaign$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    cursor?: MessageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * Campaign.segment
   */
  export type Campaign$segmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model MessageLog
   */

  export type AggregateMessageLog = {
    _count: MessageLogCountAggregateOutputType | null
    _avg: MessageLogAvgAggregateOutputType | null
    _sum: MessageLogSumAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  export type MessageLogAvgAggregateOutputType = {
    duration: number | null
  }

  export type MessageLogSumAggregateOutputType = {
    duration: number | null
  }

  export type MessageLogMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    contact: string | null
    status: string | null
    error: string | null
    ivrResponse: string | null
    duration: number | null
    providerId: string | null
    createdAt: Date | null
  }

  export type MessageLogMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    contact: string | null
    status: string | null
    error: string | null
    ivrResponse: string | null
    duration: number | null
    providerId: string | null
    createdAt: Date | null
  }

  export type MessageLogCountAggregateOutputType = {
    id: number
    campaignId: number
    contact: number
    status: number
    error: number
    ivrResponse: number
    duration: number
    providerId: number
    createdAt: number
    _all: number
  }


  export type MessageLogAvgAggregateInputType = {
    duration?: true
  }

  export type MessageLogSumAggregateInputType = {
    duration?: true
  }

  export type MessageLogMinAggregateInputType = {
    id?: true
    campaignId?: true
    contact?: true
    status?: true
    error?: true
    ivrResponse?: true
    duration?: true
    providerId?: true
    createdAt?: true
  }

  export type MessageLogMaxAggregateInputType = {
    id?: true
    campaignId?: true
    contact?: true
    status?: true
    error?: true
    ivrResponse?: true
    duration?: true
    providerId?: true
    createdAt?: true
  }

  export type MessageLogCountAggregateInputType = {
    id?: true
    campaignId?: true
    contact?: true
    status?: true
    error?: true
    ivrResponse?: true
    duration?: true
    providerId?: true
    createdAt?: true
    _all?: true
  }

  export type MessageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLog to aggregate.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageLogs
    **/
    _count?: true | MessageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageLogMaxAggregateInputType
  }

  export type GetMessageLogAggregateType<T extends MessageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageLog[P]>
      : GetScalarType<T[P], AggregateMessageLog[P]>
  }




  export type MessageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithAggregationInput | MessageLogOrderByWithAggregationInput[]
    by: MessageLogScalarFieldEnum[] | MessageLogScalarFieldEnum
    having?: MessageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageLogCountAggregateInputType | true
    _avg?: MessageLogAvgAggregateInputType
    _sum?: MessageLogSumAggregateInputType
    _min?: MessageLogMinAggregateInputType
    _max?: MessageLogMaxAggregateInputType
  }

  export type MessageLogGroupByOutputType = {
    id: string
    campaignId: string
    contact: string
    status: string
    error: string | null
    ivrResponse: string | null
    duration: number | null
    providerId: string | null
    createdAt: Date
    _count: MessageLogCountAggregateOutputType | null
    _avg: MessageLogAvgAggregateOutputType | null
    _sum: MessageLogSumAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  type GetMessageLogGroupByPayload<T extends MessageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
            : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
        }
      >
    >


  export type MessageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    contact?: boolean
    status?: boolean
    error?: boolean
    ivrResponse?: boolean
    duration?: boolean
    providerId?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    contact?: boolean
    status?: boolean
    error?: boolean
    ivrResponse?: boolean
    duration?: boolean
    providerId?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    contact?: boolean
    status?: boolean
    error?: boolean
    ivrResponse?: boolean
    duration?: boolean
    providerId?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectScalar = {
    id?: boolean
    campaignId?: boolean
    contact?: boolean
    status?: boolean
    error?: boolean
    ivrResponse?: boolean
    duration?: boolean
    providerId?: boolean
    createdAt?: boolean
  }

  export type MessageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "contact" | "status" | "error" | "ivrResponse" | "duration" | "providerId" | "createdAt", ExtArgs["result"]["messageLog"]>
  export type MessageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type MessageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type MessageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $MessageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageLog"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      contact: string
      status: string
      error: string | null
      ivrResponse: string | null
      duration: number | null
      providerId: string | null
      createdAt: Date
    }, ExtArgs["result"]["messageLog"]>
    composites: {}
  }

  type MessageLogGetPayload<S extends boolean | null | undefined | MessageLogDefaultArgs> = $Result.GetResult<Prisma.$MessageLogPayload, S>

  type MessageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageLogCountAggregateInputType | true
    }

  export interface MessageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageLog'], meta: { name: 'MessageLog' } }
    /**
     * Find zero or one MessageLog that matches the filter.
     * @param {MessageLogFindUniqueArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageLogFindUniqueArgs>(args: SelectSubset<T, MessageLogFindUniqueArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageLogFindUniqueOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageLogFindFirstArgs>(args?: SelectSubset<T, MessageLogFindFirstArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageLogs
     * const messageLogs = await prisma.messageLog.findMany()
     * 
     * // Get first 10 MessageLogs
     * const messageLogs = await prisma.messageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageLogFindManyArgs>(args?: SelectSubset<T, MessageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageLog.
     * @param {MessageLogCreateArgs} args - Arguments to create a MessageLog.
     * @example
     * // Create one MessageLog
     * const MessageLog = await prisma.messageLog.create({
     *   data: {
     *     // ... data to create a MessageLog
     *   }
     * })
     * 
     */
    create<T extends MessageLogCreateArgs>(args: SelectSubset<T, MessageLogCreateArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageLogs.
     * @param {MessageLogCreateManyArgs} args - Arguments to create many MessageLogs.
     * @example
     * // Create many MessageLogs
     * const messageLog = await prisma.messageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageLogCreateManyArgs>(args?: SelectSubset<T, MessageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageLogs and returns the data saved in the database.
     * @param {MessageLogCreateManyAndReturnArgs} args - Arguments to create many MessageLogs.
     * @example
     * // Create many MessageLogs
     * const messageLog = await prisma.messageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageLogs and only return the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageLog.
     * @param {MessageLogDeleteArgs} args - Arguments to delete one MessageLog.
     * @example
     * // Delete one MessageLog
     * const MessageLog = await prisma.messageLog.delete({
     *   where: {
     *     // ... filter to delete one MessageLog
     *   }
     * })
     * 
     */
    delete<T extends MessageLogDeleteArgs>(args: SelectSubset<T, MessageLogDeleteArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageLog.
     * @param {MessageLogUpdateArgs} args - Arguments to update one MessageLog.
     * @example
     * // Update one MessageLog
     * const messageLog = await prisma.messageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageLogUpdateArgs>(args: SelectSubset<T, MessageLogUpdateArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageLogs.
     * @param {MessageLogDeleteManyArgs} args - Arguments to filter MessageLogs to delete.
     * @example
     * // Delete a few MessageLogs
     * const { count } = await prisma.messageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageLogDeleteManyArgs>(args?: SelectSubset<T, MessageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageLogUpdateManyArgs>(args: SelectSubset<T, MessageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs and returns the data updated in the database.
     * @param {MessageLogUpdateManyAndReturnArgs} args - Arguments to update many MessageLogs.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageLogs and only return the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageLog.
     * @param {MessageLogUpsertArgs} args - Arguments to update or create a MessageLog.
     * @example
     * // Update or create a MessageLog
     * const messageLog = await prisma.messageLog.upsert({
     *   create: {
     *     // ... data to create a MessageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageLog we want to update
     *   }
     * })
     */
    upsert<T extends MessageLogUpsertArgs>(args: SelectSubset<T, MessageLogUpsertArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogCountArgs} args - Arguments to filter MessageLogs to count.
     * @example
     * // Count the number of MessageLogs
     * const count = await prisma.messageLog.count({
     *   where: {
     *     // ... the filter for the MessageLogs we want to count
     *   }
     * })
    **/
    count<T extends MessageLogCountArgs>(
      args?: Subset<T, MessageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageLogAggregateArgs>(args: Subset<T, MessageLogAggregateArgs>): Prisma.PrismaPromise<GetMessageLogAggregateType<T>>

    /**
     * Group by MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogGroupByArgs} args - Group by arguments.
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
      T extends MessageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageLogGroupByArgs['orderBy'] }
        : { orderBy?: MessageLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MessageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageLog model
   */
  readonly fields: MessageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageLog model
   */
  interface MessageLogFieldRefs {
    readonly id: FieldRef<"MessageLog", 'String'>
    readonly campaignId: FieldRef<"MessageLog", 'String'>
    readonly contact: FieldRef<"MessageLog", 'String'>
    readonly status: FieldRef<"MessageLog", 'String'>
    readonly error: FieldRef<"MessageLog", 'String'>
    readonly ivrResponse: FieldRef<"MessageLog", 'String'>
    readonly duration: FieldRef<"MessageLog", 'Int'>
    readonly providerId: FieldRef<"MessageLog", 'String'>
    readonly createdAt: FieldRef<"MessageLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageLog findUnique
   */
  export type MessageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findUniqueOrThrow
   */
  export type MessageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findFirst
   */
  export type MessageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog findFirstOrThrow
   */
  export type MessageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog findMany
   */
  export type MessageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLogs to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog create
   */
  export type MessageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageLog.
     */
    data: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
  }

  /**
   * MessageLog createMany
   */
  export type MessageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageLogs.
     */
    data: MessageLogCreateManyInput | MessageLogCreateManyInput[]
  }

  /**
   * MessageLog createManyAndReturn
   */
  export type MessageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * The data used to create many MessageLogs.
     */
    data: MessageLogCreateManyInput | MessageLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageLog update
   */
  export type MessageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageLog.
     */
    data: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
    /**
     * Choose, which MessageLog to update.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog updateMany
   */
  export type MessageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to update.
     */
    limit?: number
  }

  /**
   * MessageLog updateManyAndReturn
   */
  export type MessageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageLog upsert
   */
  export type MessageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageLog to update in case it exists.
     */
    where: MessageLogWhereUniqueInput
    /**
     * In case the MessageLog found by the `where` argument doesn't exist, create a new MessageLog with this data.
     */
    create: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
    /**
     * In case the MessageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
  }

  /**
   * MessageLog delete
   */
  export type MessageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter which MessageLog to delete.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog deleteMany
   */
  export type MessageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLogs to delete
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to delete.
     */
    limit?: number
  }

  /**
   * MessageLog without action
   */
  export type MessageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    lineId: string | null
    firstName: string | null
    lastName: string | null
    isOptedOut: boolean | null
    createdAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    lineId: string | null
    firstName: string | null
    lastName: string | null
    isOptedOut: boolean | null
    createdAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    phone: number
    email: number
    lineId: number
    firstName: number
    lastName: number
    isOptedOut: number
    createdAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    lineId?: true
    firstName?: true
    lastName?: true
    isOptedOut?: true
    createdAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    lineId?: true
    firstName?: true
    lastName?: true
    isOptedOut?: true
    createdAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    lineId?: true
    firstName?: true
    lastName?: true
    isOptedOut?: true
    createdAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    phone: string | null
    email: string | null
    lineId: string | null
    firstName: string | null
    lastName: string | null
    isOptedOut: boolean
    createdAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    lineId?: boolean
    firstName?: boolean
    lastName?: boolean
    isOptedOut?: boolean
    createdAt?: boolean
    segments?: boolean | Contact$segmentsArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    lineId?: boolean
    firstName?: boolean
    lastName?: boolean
    isOptedOut?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    lineId?: boolean
    firstName?: boolean
    lastName?: boolean
    isOptedOut?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    phone?: boolean
    email?: boolean
    lineId?: boolean
    firstName?: boolean
    lastName?: boolean
    isOptedOut?: boolean
    createdAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "email" | "lineId" | "firstName" | "lastName" | "isOptedOut" | "createdAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | Contact$segmentsArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      segments: Prisma.$SegmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string | null
      email: string | null
      lineId: string | null
      firstName: string | null
      lastName: string | null
      isOptedOut: boolean
      createdAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    segments<T extends Contact$segmentsArgs<ExtArgs> = {}>(args?: Subset<T, Contact$segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly lineId: FieldRef<"Contact", 'String'>
    readonly firstName: FieldRef<"Contact", 'String'>
    readonly lastName: FieldRef<"Contact", 'String'>
    readonly isOptedOut: FieldRef<"Contact", 'Boolean'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data?: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.segments
   */
  export type Contact$segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    cursor?: SegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Segment
   */

  export type AggregateSegment = {
    _count: SegmentCountAggregateOutputType | null
    _min: SegmentMinAggregateOutputType | null
    _max: SegmentMaxAggregateOutputType | null
  }

  export type SegmentMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SegmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SegmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SegmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SegmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SegmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SegmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Segment to aggregate.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Segments
    **/
    _count?: true | SegmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SegmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SegmentMaxAggregateInputType
  }

  export type GetSegmentAggregateType<T extends SegmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSegment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSegment[P]>
      : GetScalarType<T[P], AggregateSegment[P]>
  }




  export type SegmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithAggregationInput | SegmentOrderByWithAggregationInput[]
    by: SegmentScalarFieldEnum[] | SegmentScalarFieldEnum
    having?: SegmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SegmentCountAggregateInputType | true
    _min?: SegmentMinAggregateInputType
    _max?: SegmentMaxAggregateInputType
  }

  export type SegmentGroupByOutputType = {
    id: string
    name: string
    _count: SegmentCountAggregateOutputType | null
    _min: SegmentMinAggregateOutputType | null
    _max: SegmentMaxAggregateOutputType | null
  }

  type GetSegmentGroupByPayload<T extends SegmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SegmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SegmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SegmentGroupByOutputType[P]>
            : GetScalarType<T[P], SegmentGroupByOutputType[P]>
        }
      >
    >


  export type SegmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contacts?: boolean | Segment$contactsArgs<ExtArgs>
    campaigns?: boolean | Segment$campaignsArgs<ExtArgs>
    _count?: boolean | SegmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segment"]>

  export type SegmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["segment"]>

  export type SegmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["segment"]>

  export type SegmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SegmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["segment"]>
  export type SegmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | Segment$contactsArgs<ExtArgs>
    campaigns?: boolean | Segment$campaignsArgs<ExtArgs>
    _count?: boolean | SegmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SegmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SegmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SegmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Segment"
    objects: {
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["segment"]>
    composites: {}
  }

  type SegmentGetPayload<S extends boolean | null | undefined | SegmentDefaultArgs> = $Result.GetResult<Prisma.$SegmentPayload, S>

  type SegmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SegmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SegmentCountAggregateInputType | true
    }

  export interface SegmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Segment'], meta: { name: 'Segment' } }
    /**
     * Find zero or one Segment that matches the filter.
     * @param {SegmentFindUniqueArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SegmentFindUniqueArgs>(args: SelectSubset<T, SegmentFindUniqueArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Segment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SegmentFindUniqueOrThrowArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SegmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Segment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindFirstArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SegmentFindFirstArgs>(args?: SelectSubset<T, SegmentFindFirstArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Segment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindFirstOrThrowArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SegmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Segments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Segments
     * const segments = await prisma.segment.findMany()
     * 
     * // Get first 10 Segments
     * const segments = await prisma.segment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const segmentWithIdOnly = await prisma.segment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SegmentFindManyArgs>(args?: SelectSubset<T, SegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Segment.
     * @param {SegmentCreateArgs} args - Arguments to create a Segment.
     * @example
     * // Create one Segment
     * const Segment = await prisma.segment.create({
     *   data: {
     *     // ... data to create a Segment
     *   }
     * })
     * 
     */
    create<T extends SegmentCreateArgs>(args: SelectSubset<T, SegmentCreateArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Segments.
     * @param {SegmentCreateManyArgs} args - Arguments to create many Segments.
     * @example
     * // Create many Segments
     * const segment = await prisma.segment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SegmentCreateManyArgs>(args?: SelectSubset<T, SegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Segments and returns the data saved in the database.
     * @param {SegmentCreateManyAndReturnArgs} args - Arguments to create many Segments.
     * @example
     * // Create many Segments
     * const segment = await prisma.segment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Segments and only return the `id`
     * const segmentWithIdOnly = await prisma.segment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SegmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Segment.
     * @param {SegmentDeleteArgs} args - Arguments to delete one Segment.
     * @example
     * // Delete one Segment
     * const Segment = await prisma.segment.delete({
     *   where: {
     *     // ... filter to delete one Segment
     *   }
     * })
     * 
     */
    delete<T extends SegmentDeleteArgs>(args: SelectSubset<T, SegmentDeleteArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Segment.
     * @param {SegmentUpdateArgs} args - Arguments to update one Segment.
     * @example
     * // Update one Segment
     * const segment = await prisma.segment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SegmentUpdateArgs>(args: SelectSubset<T, SegmentUpdateArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Segments.
     * @param {SegmentDeleteManyArgs} args - Arguments to filter Segments to delete.
     * @example
     * // Delete a few Segments
     * const { count } = await prisma.segment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SegmentDeleteManyArgs>(args?: SelectSubset<T, SegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Segments
     * const segment = await prisma.segment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SegmentUpdateManyArgs>(args: SelectSubset<T, SegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Segments and returns the data updated in the database.
     * @param {SegmentUpdateManyAndReturnArgs} args - Arguments to update many Segments.
     * @example
     * // Update many Segments
     * const segment = await prisma.segment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Segments and only return the `id`
     * const segmentWithIdOnly = await prisma.segment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SegmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SegmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Segment.
     * @param {SegmentUpsertArgs} args - Arguments to update or create a Segment.
     * @example
     * // Update or create a Segment
     * const segment = await prisma.segment.upsert({
     *   create: {
     *     // ... data to create a Segment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Segment we want to update
     *   }
     * })
     */
    upsert<T extends SegmentUpsertArgs>(args: SelectSubset<T, SegmentUpsertArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentCountArgs} args - Arguments to filter Segments to count.
     * @example
     * // Count the number of Segments
     * const count = await prisma.segment.count({
     *   where: {
     *     // ... the filter for the Segments we want to count
     *   }
     * })
    **/
    count<T extends SegmentCountArgs>(
      args?: Subset<T, SegmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SegmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Segment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SegmentAggregateArgs>(args: Subset<T, SegmentAggregateArgs>): Prisma.PrismaPromise<GetSegmentAggregateType<T>>

    /**
     * Group by Segment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentGroupByArgs} args - Group by arguments.
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
      T extends SegmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SegmentGroupByArgs['orderBy'] }
        : { orderBy?: SegmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Segment model
   */
  readonly fields: SegmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Segment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SegmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contacts<T extends Segment$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Segment$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Segment$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Segment$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Segment model
   */
  interface SegmentFieldRefs {
    readonly id: FieldRef<"Segment", 'String'>
    readonly name: FieldRef<"Segment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Segment findUnique
   */
  export type SegmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment findUniqueOrThrow
   */
  export type SegmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment findFirst
   */
  export type SegmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segments.
     */
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment findFirstOrThrow
   */
  export type SegmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segments.
     */
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment findMany
   */
  export type SegmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segments to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segments.
     */
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment create
   */
  export type SegmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Segment.
     */
    data: XOR<SegmentCreateInput, SegmentUncheckedCreateInput>
  }

  /**
   * Segment createMany
   */
  export type SegmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Segments.
     */
    data: SegmentCreateManyInput | SegmentCreateManyInput[]
  }

  /**
   * Segment createManyAndReturn
   */
  export type SegmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * The data used to create many Segments.
     */
    data: SegmentCreateManyInput | SegmentCreateManyInput[]
  }

  /**
   * Segment update
   */
  export type SegmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Segment.
     */
    data: XOR<SegmentUpdateInput, SegmentUncheckedUpdateInput>
    /**
     * Choose, which Segment to update.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment updateMany
   */
  export type SegmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Segments.
     */
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyInput>
    /**
     * Filter which Segments to update
     */
    where?: SegmentWhereInput
    /**
     * Limit how many Segments to update.
     */
    limit?: number
  }

  /**
   * Segment updateManyAndReturn
   */
  export type SegmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * The data used to update Segments.
     */
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyInput>
    /**
     * Filter which Segments to update
     */
    where?: SegmentWhereInput
    /**
     * Limit how many Segments to update.
     */
    limit?: number
  }

  /**
   * Segment upsert
   */
  export type SegmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Segment to update in case it exists.
     */
    where: SegmentWhereUniqueInput
    /**
     * In case the Segment found by the `where` argument doesn't exist, create a new Segment with this data.
     */
    create: XOR<SegmentCreateInput, SegmentUncheckedCreateInput>
    /**
     * In case the Segment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SegmentUpdateInput, SegmentUncheckedUpdateInput>
  }

  /**
   * Segment delete
   */
  export type SegmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter which Segment to delete.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment deleteMany
   */
  export type SegmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Segments to delete
     */
    where?: SegmentWhereInput
    /**
     * Limit how many Segments to delete.
     */
    limit?: number
  }

  /**
   * Segment.contacts
   */
  export type Segment$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Segment.campaigns
   */
  export type Segment$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Segment without action
   */
  export type SegmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
  }


  /**
   * Model SmsReply
   */

  export type AggregateSmsReply = {
    _count: SmsReplyCountAggregateOutputType | null
    _min: SmsReplyMinAggregateOutputType | null
    _max: SmsReplyMaxAggregateOutputType | null
  }

  export type SmsReplyMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    fromNumber: string | null
    message: string | null
    provider: string | null
    receivedAt: Date | null
  }

  export type SmsReplyMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    fromNumber: string | null
    message: string | null
    provider: string | null
    receivedAt: Date | null
  }

  export type SmsReplyCountAggregateOutputType = {
    id: number
    campaignId: number
    fromNumber: number
    message: number
    provider: number
    receivedAt: number
    _all: number
  }


  export type SmsReplyMinAggregateInputType = {
    id?: true
    campaignId?: true
    fromNumber?: true
    message?: true
    provider?: true
    receivedAt?: true
  }

  export type SmsReplyMaxAggregateInputType = {
    id?: true
    campaignId?: true
    fromNumber?: true
    message?: true
    provider?: true
    receivedAt?: true
  }

  export type SmsReplyCountAggregateInputType = {
    id?: true
    campaignId?: true
    fromNumber?: true
    message?: true
    provider?: true
    receivedAt?: true
    _all?: true
  }

  export type SmsReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmsReply to aggregate.
     */
    where?: SmsReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsReplies to fetch.
     */
    orderBy?: SmsReplyOrderByWithRelationInput | SmsReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmsReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmsReplies
    **/
    _count?: true | SmsReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmsReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmsReplyMaxAggregateInputType
  }

  export type GetSmsReplyAggregateType<T extends SmsReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateSmsReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmsReply[P]>
      : GetScalarType<T[P], AggregateSmsReply[P]>
  }




  export type SmsReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmsReplyWhereInput
    orderBy?: SmsReplyOrderByWithAggregationInput | SmsReplyOrderByWithAggregationInput[]
    by: SmsReplyScalarFieldEnum[] | SmsReplyScalarFieldEnum
    having?: SmsReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmsReplyCountAggregateInputType | true
    _min?: SmsReplyMinAggregateInputType
    _max?: SmsReplyMaxAggregateInputType
  }

  export type SmsReplyGroupByOutputType = {
    id: string
    campaignId: string | null
    fromNumber: string
    message: string
    provider: string
    receivedAt: Date
    _count: SmsReplyCountAggregateOutputType | null
    _min: SmsReplyMinAggregateOutputType | null
    _max: SmsReplyMaxAggregateOutputType | null
  }

  type GetSmsReplyGroupByPayload<T extends SmsReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmsReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmsReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmsReplyGroupByOutputType[P]>
            : GetScalarType<T[P], SmsReplyGroupByOutputType[P]>
        }
      >
    >


  export type SmsReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    fromNumber?: boolean
    message?: boolean
    provider?: boolean
    receivedAt?: boolean
  }, ExtArgs["result"]["smsReply"]>

  export type SmsReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    fromNumber?: boolean
    message?: boolean
    provider?: boolean
    receivedAt?: boolean
  }, ExtArgs["result"]["smsReply"]>

  export type SmsReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    fromNumber?: boolean
    message?: boolean
    provider?: boolean
    receivedAt?: boolean
  }, ExtArgs["result"]["smsReply"]>

  export type SmsReplySelectScalar = {
    id?: boolean
    campaignId?: boolean
    fromNumber?: boolean
    message?: boolean
    provider?: boolean
    receivedAt?: boolean
  }

  export type SmsReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "fromNumber" | "message" | "provider" | "receivedAt", ExtArgs["result"]["smsReply"]>

  export type $SmsReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmsReply"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string | null
      fromNumber: string
      message: string
      provider: string
      receivedAt: Date
    }, ExtArgs["result"]["smsReply"]>
    composites: {}
  }

  type SmsReplyGetPayload<S extends boolean | null | undefined | SmsReplyDefaultArgs> = $Result.GetResult<Prisma.$SmsReplyPayload, S>

  type SmsReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SmsReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SmsReplyCountAggregateInputType | true
    }

  export interface SmsReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmsReply'], meta: { name: 'SmsReply' } }
    /**
     * Find zero or one SmsReply that matches the filter.
     * @param {SmsReplyFindUniqueArgs} args - Arguments to find a SmsReply
     * @example
     * // Get one SmsReply
     * const smsReply = await prisma.smsReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmsReplyFindUniqueArgs>(args: SelectSubset<T, SmsReplyFindUniqueArgs<ExtArgs>>): Prisma__SmsReplyClient<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SmsReply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SmsReplyFindUniqueOrThrowArgs} args - Arguments to find a SmsReply
     * @example
     * // Get one SmsReply
     * const smsReply = await prisma.smsReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmsReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, SmsReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmsReplyClient<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmsReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsReplyFindFirstArgs} args - Arguments to find a SmsReply
     * @example
     * // Get one SmsReply
     * const smsReply = await prisma.smsReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmsReplyFindFirstArgs>(args?: SelectSubset<T, SmsReplyFindFirstArgs<ExtArgs>>): Prisma__SmsReplyClient<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmsReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsReplyFindFirstOrThrowArgs} args - Arguments to find a SmsReply
     * @example
     * // Get one SmsReply
     * const smsReply = await prisma.smsReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmsReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, SmsReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmsReplyClient<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SmsReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmsReplies
     * const smsReplies = await prisma.smsReply.findMany()
     * 
     * // Get first 10 SmsReplies
     * const smsReplies = await prisma.smsReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smsReplyWithIdOnly = await prisma.smsReply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmsReplyFindManyArgs>(args?: SelectSubset<T, SmsReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SmsReply.
     * @param {SmsReplyCreateArgs} args - Arguments to create a SmsReply.
     * @example
     * // Create one SmsReply
     * const SmsReply = await prisma.smsReply.create({
     *   data: {
     *     // ... data to create a SmsReply
     *   }
     * })
     * 
     */
    create<T extends SmsReplyCreateArgs>(args: SelectSubset<T, SmsReplyCreateArgs<ExtArgs>>): Prisma__SmsReplyClient<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SmsReplies.
     * @param {SmsReplyCreateManyArgs} args - Arguments to create many SmsReplies.
     * @example
     * // Create many SmsReplies
     * const smsReply = await prisma.smsReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmsReplyCreateManyArgs>(args?: SelectSubset<T, SmsReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmsReplies and returns the data saved in the database.
     * @param {SmsReplyCreateManyAndReturnArgs} args - Arguments to create many SmsReplies.
     * @example
     * // Create many SmsReplies
     * const smsReply = await prisma.smsReply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmsReplies and only return the `id`
     * const smsReplyWithIdOnly = await prisma.smsReply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmsReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, SmsReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SmsReply.
     * @param {SmsReplyDeleteArgs} args - Arguments to delete one SmsReply.
     * @example
     * // Delete one SmsReply
     * const SmsReply = await prisma.smsReply.delete({
     *   where: {
     *     // ... filter to delete one SmsReply
     *   }
     * })
     * 
     */
    delete<T extends SmsReplyDeleteArgs>(args: SelectSubset<T, SmsReplyDeleteArgs<ExtArgs>>): Prisma__SmsReplyClient<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SmsReply.
     * @param {SmsReplyUpdateArgs} args - Arguments to update one SmsReply.
     * @example
     * // Update one SmsReply
     * const smsReply = await prisma.smsReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmsReplyUpdateArgs>(args: SelectSubset<T, SmsReplyUpdateArgs<ExtArgs>>): Prisma__SmsReplyClient<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SmsReplies.
     * @param {SmsReplyDeleteManyArgs} args - Arguments to filter SmsReplies to delete.
     * @example
     * // Delete a few SmsReplies
     * const { count } = await prisma.smsReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmsReplyDeleteManyArgs>(args?: SelectSubset<T, SmsReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmsReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmsReplies
     * const smsReply = await prisma.smsReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmsReplyUpdateManyArgs>(args: SelectSubset<T, SmsReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmsReplies and returns the data updated in the database.
     * @param {SmsReplyUpdateManyAndReturnArgs} args - Arguments to update many SmsReplies.
     * @example
     * // Update many SmsReplies
     * const smsReply = await prisma.smsReply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SmsReplies and only return the `id`
     * const smsReplyWithIdOnly = await prisma.smsReply.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SmsReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, SmsReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SmsReply.
     * @param {SmsReplyUpsertArgs} args - Arguments to update or create a SmsReply.
     * @example
     * // Update or create a SmsReply
     * const smsReply = await prisma.smsReply.upsert({
     *   create: {
     *     // ... data to create a SmsReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmsReply we want to update
     *   }
     * })
     */
    upsert<T extends SmsReplyUpsertArgs>(args: SelectSubset<T, SmsReplyUpsertArgs<ExtArgs>>): Prisma__SmsReplyClient<$Result.GetResult<Prisma.$SmsReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SmsReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsReplyCountArgs} args - Arguments to filter SmsReplies to count.
     * @example
     * // Count the number of SmsReplies
     * const count = await prisma.smsReply.count({
     *   where: {
     *     // ... the filter for the SmsReplies we want to count
     *   }
     * })
    **/
    count<T extends SmsReplyCountArgs>(
      args?: Subset<T, SmsReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmsReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmsReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmsReplyAggregateArgs>(args: Subset<T, SmsReplyAggregateArgs>): Prisma.PrismaPromise<GetSmsReplyAggregateType<T>>

    /**
     * Group by SmsReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsReplyGroupByArgs} args - Group by arguments.
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
      T extends SmsReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmsReplyGroupByArgs['orderBy'] }
        : { orderBy?: SmsReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SmsReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmsReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmsReply model
   */
  readonly fields: SmsReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmsReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmsReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SmsReply model
   */
  interface SmsReplyFieldRefs {
    readonly id: FieldRef<"SmsReply", 'String'>
    readonly campaignId: FieldRef<"SmsReply", 'String'>
    readonly fromNumber: FieldRef<"SmsReply", 'String'>
    readonly message: FieldRef<"SmsReply", 'String'>
    readonly provider: FieldRef<"SmsReply", 'String'>
    readonly receivedAt: FieldRef<"SmsReply", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmsReply findUnique
   */
  export type SmsReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * Filter, which SmsReply to fetch.
     */
    where: SmsReplyWhereUniqueInput
  }

  /**
   * SmsReply findUniqueOrThrow
   */
  export type SmsReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * Filter, which SmsReply to fetch.
     */
    where: SmsReplyWhereUniqueInput
  }

  /**
   * SmsReply findFirst
   */
  export type SmsReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * Filter, which SmsReply to fetch.
     */
    where?: SmsReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsReplies to fetch.
     */
    orderBy?: SmsReplyOrderByWithRelationInput | SmsReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmsReplies.
     */
    cursor?: SmsReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsReplies.
     */
    distinct?: SmsReplyScalarFieldEnum | SmsReplyScalarFieldEnum[]
  }

  /**
   * SmsReply findFirstOrThrow
   */
  export type SmsReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * Filter, which SmsReply to fetch.
     */
    where?: SmsReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsReplies to fetch.
     */
    orderBy?: SmsReplyOrderByWithRelationInput | SmsReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmsReplies.
     */
    cursor?: SmsReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsReplies.
     */
    distinct?: SmsReplyScalarFieldEnum | SmsReplyScalarFieldEnum[]
  }

  /**
   * SmsReply findMany
   */
  export type SmsReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * Filter, which SmsReplies to fetch.
     */
    where?: SmsReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsReplies to fetch.
     */
    orderBy?: SmsReplyOrderByWithRelationInput | SmsReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmsReplies.
     */
    cursor?: SmsReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsReplies.
     */
    distinct?: SmsReplyScalarFieldEnum | SmsReplyScalarFieldEnum[]
  }

  /**
   * SmsReply create
   */
  export type SmsReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * The data needed to create a SmsReply.
     */
    data: XOR<SmsReplyCreateInput, SmsReplyUncheckedCreateInput>
  }

  /**
   * SmsReply createMany
   */
  export type SmsReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmsReplies.
     */
    data: SmsReplyCreateManyInput | SmsReplyCreateManyInput[]
  }

  /**
   * SmsReply createManyAndReturn
   */
  export type SmsReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * The data used to create many SmsReplies.
     */
    data: SmsReplyCreateManyInput | SmsReplyCreateManyInput[]
  }

  /**
   * SmsReply update
   */
  export type SmsReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * The data needed to update a SmsReply.
     */
    data: XOR<SmsReplyUpdateInput, SmsReplyUncheckedUpdateInput>
    /**
     * Choose, which SmsReply to update.
     */
    where: SmsReplyWhereUniqueInput
  }

  /**
   * SmsReply updateMany
   */
  export type SmsReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmsReplies.
     */
    data: XOR<SmsReplyUpdateManyMutationInput, SmsReplyUncheckedUpdateManyInput>
    /**
     * Filter which SmsReplies to update
     */
    where?: SmsReplyWhereInput
    /**
     * Limit how many SmsReplies to update.
     */
    limit?: number
  }

  /**
   * SmsReply updateManyAndReturn
   */
  export type SmsReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * The data used to update SmsReplies.
     */
    data: XOR<SmsReplyUpdateManyMutationInput, SmsReplyUncheckedUpdateManyInput>
    /**
     * Filter which SmsReplies to update
     */
    where?: SmsReplyWhereInput
    /**
     * Limit how many SmsReplies to update.
     */
    limit?: number
  }

  /**
   * SmsReply upsert
   */
  export type SmsReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * The filter to search for the SmsReply to update in case it exists.
     */
    where: SmsReplyWhereUniqueInput
    /**
     * In case the SmsReply found by the `where` argument doesn't exist, create a new SmsReply with this data.
     */
    create: XOR<SmsReplyCreateInput, SmsReplyUncheckedCreateInput>
    /**
     * In case the SmsReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmsReplyUpdateInput, SmsReplyUncheckedUpdateInput>
  }

  /**
   * SmsReply delete
   */
  export type SmsReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
    /**
     * Filter which SmsReply to delete.
     */
    where: SmsReplyWhereUniqueInput
  }

  /**
   * SmsReply deleteMany
   */
  export type SmsReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmsReplies to delete
     */
    where?: SmsReplyWhereInput
    /**
     * Limit how many SmsReplies to delete.
     */
    limit?: number
  }

  /**
   * SmsReply without action
   */
  export type SmsReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsReply
     */
    select?: SmsReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsReply
     */
    omit?: SmsReplyOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    platform: 'platform',
    provider: 'provider',
    providerConfig: 'providerConfig',
    message: 'message',
    metaToken: 'metaToken',
    adminId: 'adminId',
    isTemplate: 'isTemplate',
    templateLanguage: 'templateLanguage',
    messageTag: 'messageTag',
    subject: 'subject',
    audioUrl: 'audioUrl',
    status: 'status',
    scheduledAt: 'scheduledAt',
    segmentId: 'segmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const MessageLogScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    contact: 'contact',
    status: 'status',
    error: 'error',
    ivrResponse: 'ivrResponse',
    duration: 'duration',
    providerId: 'providerId',
    createdAt: 'createdAt'
  };

  export type MessageLogScalarFieldEnum = (typeof MessageLogScalarFieldEnum)[keyof typeof MessageLogScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    email: 'email',
    lineId: 'lineId',
    firstName: 'firstName',
    lastName: 'lastName',
    isOptedOut: 'isOptedOut',
    createdAt: 'createdAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SegmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SegmentScalarFieldEnum = (typeof SegmentScalarFieldEnum)[keyof typeof SegmentScalarFieldEnum]


  export const SmsReplyScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    fromNumber: 'fromNumber',
    message: 'message',
    provider: 'provider',
    receivedAt: 'receivedAt'
  };

  export type SmsReplyScalarFieldEnum = (typeof SmsReplyScalarFieldEnum)[keyof typeof SmsReplyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    platform?: StringFilter<"Campaign"> | string
    provider?: StringNullableFilter<"Campaign"> | string | null
    providerConfig?: StringNullableFilter<"Campaign"> | string | null
    message?: StringFilter<"Campaign"> | string
    metaToken?: StringNullableFilter<"Campaign"> | string | null
    adminId?: StringNullableFilter<"Campaign"> | string | null
    isTemplate?: BoolFilter<"Campaign"> | boolean
    templateLanguage?: StringNullableFilter<"Campaign"> | string | null
    messageTag?: StringNullableFilter<"Campaign"> | string | null
    subject?: StringNullableFilter<"Campaign"> | string | null
    audioUrl?: StringNullableFilter<"Campaign"> | string | null
    status?: StringFilter<"Campaign"> | string
    scheduledAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    segmentId?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    logs?: MessageLogListRelationFilter
    segment?: XOR<SegmentNullableScalarRelationFilter, SegmentWhereInput> | null
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerConfig?: SortOrderInput | SortOrder
    message?: SortOrder
    metaToken?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    isTemplate?: SortOrder
    templateLanguage?: SortOrderInput | SortOrder
    messageTag?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    segmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logs?: MessageLogOrderByRelationAggregateInput
    segment?: SegmentOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    platform?: StringFilter<"Campaign"> | string
    provider?: StringNullableFilter<"Campaign"> | string | null
    providerConfig?: StringNullableFilter<"Campaign"> | string | null
    message?: StringFilter<"Campaign"> | string
    metaToken?: StringNullableFilter<"Campaign"> | string | null
    adminId?: StringNullableFilter<"Campaign"> | string | null
    isTemplate?: BoolFilter<"Campaign"> | boolean
    templateLanguage?: StringNullableFilter<"Campaign"> | string | null
    messageTag?: StringNullableFilter<"Campaign"> | string | null
    subject?: StringNullableFilter<"Campaign"> | string | null
    audioUrl?: StringNullableFilter<"Campaign"> | string | null
    status?: StringFilter<"Campaign"> | string
    scheduledAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    segmentId?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    logs?: MessageLogListRelationFilter
    segment?: XOR<SegmentNullableScalarRelationFilter, SegmentWhereInput> | null
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerConfig?: SortOrderInput | SortOrder
    message?: SortOrder
    metaToken?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    isTemplate?: SortOrder
    templateLanguage?: SortOrderInput | SortOrder
    messageTag?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    segmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    platform?: StringWithAggregatesFilter<"Campaign"> | string
    provider?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    providerConfig?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    message?: StringWithAggregatesFilter<"Campaign"> | string
    metaToken?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    adminId?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    isTemplate?: BoolWithAggregatesFilter<"Campaign"> | boolean
    templateLanguage?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    messageTag?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    subject?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    audioUrl?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    status?: StringWithAggregatesFilter<"Campaign"> | string
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    segmentId?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type MessageLogWhereInput = {
    AND?: MessageLogWhereInput | MessageLogWhereInput[]
    OR?: MessageLogWhereInput[]
    NOT?: MessageLogWhereInput | MessageLogWhereInput[]
    id?: StringFilter<"MessageLog"> | string
    campaignId?: StringFilter<"MessageLog"> | string
    contact?: StringFilter<"MessageLog"> | string
    status?: StringFilter<"MessageLog"> | string
    error?: StringNullableFilter<"MessageLog"> | string | null
    ivrResponse?: StringNullableFilter<"MessageLog"> | string | null
    duration?: IntNullableFilter<"MessageLog"> | number | null
    providerId?: StringNullableFilter<"MessageLog"> | string | null
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type MessageLogOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    ivrResponse?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type MessageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageLogWhereInput | MessageLogWhereInput[]
    OR?: MessageLogWhereInput[]
    NOT?: MessageLogWhereInput | MessageLogWhereInput[]
    campaignId?: StringFilter<"MessageLog"> | string
    contact?: StringFilter<"MessageLog"> | string
    status?: StringFilter<"MessageLog"> | string
    error?: StringNullableFilter<"MessageLog"> | string | null
    ivrResponse?: StringNullableFilter<"MessageLog"> | string | null
    duration?: IntNullableFilter<"MessageLog"> | number | null
    providerId?: StringNullableFilter<"MessageLog"> | string | null
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type MessageLogOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    ivrResponse?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MessageLogCountOrderByAggregateInput
    _avg?: MessageLogAvgOrderByAggregateInput
    _max?: MessageLogMaxOrderByAggregateInput
    _min?: MessageLogMinOrderByAggregateInput
    _sum?: MessageLogSumOrderByAggregateInput
  }

  export type MessageLogScalarWhereWithAggregatesInput = {
    AND?: MessageLogScalarWhereWithAggregatesInput | MessageLogScalarWhereWithAggregatesInput[]
    OR?: MessageLogScalarWhereWithAggregatesInput[]
    NOT?: MessageLogScalarWhereWithAggregatesInput | MessageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageLog"> | string
    campaignId?: StringWithAggregatesFilter<"MessageLog"> | string
    contact?: StringWithAggregatesFilter<"MessageLog"> | string
    status?: StringWithAggregatesFilter<"MessageLog"> | string
    error?: StringNullableWithAggregatesFilter<"MessageLog"> | string | null
    ivrResponse?: StringNullableWithAggregatesFilter<"MessageLog"> | string | null
    duration?: IntNullableWithAggregatesFilter<"MessageLog"> | number | null
    providerId?: StringNullableWithAggregatesFilter<"MessageLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MessageLog"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    lineId?: StringNullableFilter<"Contact"> | string | null
    firstName?: StringNullableFilter<"Contact"> | string | null
    lastName?: StringNullableFilter<"Contact"> | string | null
    isOptedOut?: BoolFilter<"Contact"> | boolean
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    segments?: SegmentListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    lineId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    isOptedOut?: SortOrder
    createdAt?: SortOrder
    segments?: SegmentOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    email?: string
    lineId?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    firstName?: StringNullableFilter<"Contact"> | string | null
    lastName?: StringNullableFilter<"Contact"> | string | null
    isOptedOut?: BoolFilter<"Contact"> | boolean
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    segments?: SegmentListRelationFilter
  }, "id" | "phone" | "email" | "lineId">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    lineId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    isOptedOut?: SortOrder
    createdAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    lineId?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    isOptedOut?: BoolWithAggregatesFilter<"Contact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type SegmentWhereInput = {
    AND?: SegmentWhereInput | SegmentWhereInput[]
    OR?: SegmentWhereInput[]
    NOT?: SegmentWhereInput | SegmentWhereInput[]
    id?: StringFilter<"Segment"> | string
    name?: StringFilter<"Segment"> | string
    contacts?: ContactListRelationFilter
    campaigns?: CampaignListRelationFilter
  }

  export type SegmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contacts?: ContactOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type SegmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SegmentWhereInput | SegmentWhereInput[]
    OR?: SegmentWhereInput[]
    NOT?: SegmentWhereInput | SegmentWhereInput[]
    name?: StringFilter<"Segment"> | string
    contacts?: ContactListRelationFilter
    campaigns?: CampaignListRelationFilter
  }, "id">

  export type SegmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SegmentCountOrderByAggregateInput
    _max?: SegmentMaxOrderByAggregateInput
    _min?: SegmentMinOrderByAggregateInput
  }

  export type SegmentScalarWhereWithAggregatesInput = {
    AND?: SegmentScalarWhereWithAggregatesInput | SegmentScalarWhereWithAggregatesInput[]
    OR?: SegmentScalarWhereWithAggregatesInput[]
    NOT?: SegmentScalarWhereWithAggregatesInput | SegmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Segment"> | string
    name?: StringWithAggregatesFilter<"Segment"> | string
  }

  export type SmsReplyWhereInput = {
    AND?: SmsReplyWhereInput | SmsReplyWhereInput[]
    OR?: SmsReplyWhereInput[]
    NOT?: SmsReplyWhereInput | SmsReplyWhereInput[]
    id?: StringFilter<"SmsReply"> | string
    campaignId?: StringNullableFilter<"SmsReply"> | string | null
    fromNumber?: StringFilter<"SmsReply"> | string
    message?: StringFilter<"SmsReply"> | string
    provider?: StringFilter<"SmsReply"> | string
    receivedAt?: DateTimeFilter<"SmsReply"> | Date | string
  }

  export type SmsReplyOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    fromNumber?: SortOrder
    message?: SortOrder
    provider?: SortOrder
    receivedAt?: SortOrder
  }

  export type SmsReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SmsReplyWhereInput | SmsReplyWhereInput[]
    OR?: SmsReplyWhereInput[]
    NOT?: SmsReplyWhereInput | SmsReplyWhereInput[]
    campaignId?: StringNullableFilter<"SmsReply"> | string | null
    fromNumber?: StringFilter<"SmsReply"> | string
    message?: StringFilter<"SmsReply"> | string
    provider?: StringFilter<"SmsReply"> | string
    receivedAt?: DateTimeFilter<"SmsReply"> | Date | string
  }, "id">

  export type SmsReplyOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    fromNumber?: SortOrder
    message?: SortOrder
    provider?: SortOrder
    receivedAt?: SortOrder
    _count?: SmsReplyCountOrderByAggregateInput
    _max?: SmsReplyMaxOrderByAggregateInput
    _min?: SmsReplyMinOrderByAggregateInput
  }

  export type SmsReplyScalarWhereWithAggregatesInput = {
    AND?: SmsReplyScalarWhereWithAggregatesInput | SmsReplyScalarWhereWithAggregatesInput[]
    OR?: SmsReplyScalarWhereWithAggregatesInput[]
    NOT?: SmsReplyScalarWhereWithAggregatesInput | SmsReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SmsReply"> | string
    campaignId?: StringNullableWithAggregatesFilter<"SmsReply"> | string | null
    fromNumber?: StringWithAggregatesFilter<"SmsReply"> | string
    message?: StringWithAggregatesFilter<"SmsReply"> | string
    provider?: StringWithAggregatesFilter<"SmsReply"> | string
    receivedAt?: DateTimeWithAggregatesFilter<"SmsReply"> | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    platform: string
    provider?: string | null
    providerConfig?: string | null
    message: string
    metaToken?: string | null
    adminId?: string | null
    isTemplate?: boolean
    templateLanguage?: string | null
    messageTag?: string | null
    subject?: string | null
    audioUrl?: string | null
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: MessageLogCreateNestedManyWithoutCampaignInput
    segment?: SegmentCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    platform: string
    provider?: string | null
    providerConfig?: string | null
    message: string
    metaToken?: string | null
    adminId?: string | null
    isTemplate?: boolean
    templateLanguage?: string | null
    messageTag?: string | null
    subject?: string | null
    audioUrl?: string | null
    status?: string
    scheduledAt?: Date | string | null
    segmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: MessageLogUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: MessageLogUpdateManyWithoutCampaignNestedInput
    segment?: SegmentUpdateOneWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: MessageLogUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    platform: string
    provider?: string | null
    providerConfig?: string | null
    message: string
    metaToken?: string | null
    adminId?: string | null
    isTemplate?: boolean
    templateLanguage?: string | null
    messageTag?: string | null
    subject?: string | null
    audioUrl?: string | null
    status?: string
    scheduledAt?: Date | string | null
    segmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogCreateInput = {
    id?: string
    contact: string
    status: string
    error?: string | null
    ivrResponse?: string | null
    duration?: number | null
    providerId?: string | null
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutLogsInput
  }

  export type MessageLogUncheckedCreateInput = {
    id?: string
    campaignId: string
    contact: string
    status: string
    error?: string | null
    ivrResponse?: string | null
    duration?: number | null
    providerId?: string | null
    createdAt?: Date | string
  }

  export type MessageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ivrResponse?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutLogsNestedInput
  }

  export type MessageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ivrResponse?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogCreateManyInput = {
    id?: string
    campaignId: string
    contact: string
    status: string
    error?: string | null
    ivrResponse?: string | null
    duration?: number | null
    providerId?: string | null
    createdAt?: Date | string
  }

  export type MessageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ivrResponse?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ivrResponse?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    phone?: string | null
    email?: string | null
    lineId?: string | null
    firstName?: string | null
    lastName?: string | null
    isOptedOut?: boolean
    createdAt?: Date | string
    segments?: SegmentCreateNestedManyWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    phone?: string | null
    email?: string | null
    lineId?: string | null
    firstName?: string | null
    lastName?: string | null
    isOptedOut?: boolean
    createdAt?: Date | string
    segments?: SegmentUncheckedCreateNestedManyWithoutContactsInput
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lineId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isOptedOut?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: SegmentUpdateManyWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lineId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isOptedOut?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: SegmentUncheckedUpdateManyWithoutContactsNestedInput
  }

  export type ContactCreateManyInput = {
    id?: string
    phone?: string | null
    email?: string | null
    lineId?: string | null
    firstName?: string | null
    lastName?: string | null
    isOptedOut?: boolean
    createdAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lineId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isOptedOut?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lineId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isOptedOut?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SegmentCreateInput = {
    id?: string
    name: string
    contacts?: ContactCreateNestedManyWithoutSegmentsInput
    campaigns?: CampaignCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUncheckedCreateInput = {
    id?: string
    name: string
    contacts?: ContactUncheckedCreateNestedManyWithoutSegmentsInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contacts?: ContactUpdateManyWithoutSegmentsNestedInput
    campaigns?: CampaignUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contacts?: ContactUncheckedUpdateManyWithoutSegmentsNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentCreateManyInput = {
    id?: string
    name: string
  }

  export type SegmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SmsReplyCreateInput = {
    id?: string
    campaignId?: string | null
    fromNumber: string
    message: string
    provider: string
    receivedAt?: Date | string
  }

  export type SmsReplyUncheckedCreateInput = {
    id?: string
    campaignId?: string | null
    fromNumber: string
    message: string
    provider: string
    receivedAt?: Date | string
  }

  export type SmsReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    fromNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    fromNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsReplyCreateManyInput = {
    id?: string
    campaignId?: string | null
    fromNumber: string
    message: string
    provider: string
    receivedAt?: Date | string
  }

  export type SmsReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    fromNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    fromNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageLogListRelationFilter = {
    every?: MessageLogWhereInput
    some?: MessageLogWhereInput
    none?: MessageLogWhereInput
  }

  export type SegmentNullableScalarRelationFilter = {
    is?: SegmentWhereInput | null
    isNot?: SegmentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    provider?: SortOrder
    providerConfig?: SortOrder
    message?: SortOrder
    metaToken?: SortOrder
    adminId?: SortOrder
    isTemplate?: SortOrder
    templateLanguage?: SortOrder
    messageTag?: SortOrder
    subject?: SortOrder
    audioUrl?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    segmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    provider?: SortOrder
    providerConfig?: SortOrder
    message?: SortOrder
    metaToken?: SortOrder
    adminId?: SortOrder
    isTemplate?: SortOrder
    templateLanguage?: SortOrder
    messageTag?: SortOrder
    subject?: SortOrder
    audioUrl?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    segmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    provider?: SortOrder
    providerConfig?: SortOrder
    message?: SortOrder
    metaToken?: SortOrder
    adminId?: SortOrder
    isTemplate?: SortOrder
    templateLanguage?: SortOrder
    messageTag?: SortOrder
    subject?: SortOrder
    audioUrl?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    segmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type MessageLogCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    error?: SortOrder
    ivrResponse?: SortOrder
    duration?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageLogAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type MessageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    error?: SortOrder
    ivrResponse?: SortOrder
    duration?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageLogMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    error?: SortOrder
    ivrResponse?: SortOrder
    duration?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageLogSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SegmentListRelationFilter = {
    every?: SegmentWhereInput
    some?: SegmentWhereInput
    none?: SegmentWhereInput
  }

  export type SegmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    lineId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isOptedOut?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    lineId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isOptedOut?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    lineId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isOptedOut?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SegmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SegmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SegmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SmsReplyCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    fromNumber?: SortOrder
    message?: SortOrder
    provider?: SortOrder
    receivedAt?: SortOrder
  }

  export type SmsReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    fromNumber?: SortOrder
    message?: SortOrder
    provider?: SortOrder
    receivedAt?: SortOrder
  }

  export type SmsReplyMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    fromNumber?: SortOrder
    message?: SortOrder
    provider?: SortOrder
    receivedAt?: SortOrder
  }

  export type MessageLogCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MessageLogCreateWithoutCampaignInput, MessageLogUncheckedCreateWithoutCampaignInput> | MessageLogCreateWithoutCampaignInput[] | MessageLogUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutCampaignInput | MessageLogCreateOrConnectWithoutCampaignInput[]
    createMany?: MessageLogCreateManyCampaignInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type SegmentCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<SegmentCreateWithoutCampaignsInput, SegmentUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: SegmentCreateOrConnectWithoutCampaignsInput
    connect?: SegmentWhereUniqueInput
  }

  export type MessageLogUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MessageLogCreateWithoutCampaignInput, MessageLogUncheckedCreateWithoutCampaignInput> | MessageLogCreateWithoutCampaignInput[] | MessageLogUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutCampaignInput | MessageLogCreateOrConnectWithoutCampaignInput[]
    createMany?: MessageLogCreateManyCampaignInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageLogUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MessageLogCreateWithoutCampaignInput, MessageLogUncheckedCreateWithoutCampaignInput> | MessageLogCreateWithoutCampaignInput[] | MessageLogUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutCampaignInput | MessageLogCreateOrConnectWithoutCampaignInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutCampaignInput | MessageLogUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MessageLogCreateManyCampaignInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutCampaignInput | MessageLogUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutCampaignInput | MessageLogUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type SegmentUpdateOneWithoutCampaignsNestedInput = {
    create?: XOR<SegmentCreateWithoutCampaignsInput, SegmentUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: SegmentCreateOrConnectWithoutCampaignsInput
    upsert?: SegmentUpsertWithoutCampaignsInput
    disconnect?: SegmentWhereInput | boolean
    delete?: SegmentWhereInput | boolean
    connect?: SegmentWhereUniqueInput
    update?: XOR<XOR<SegmentUpdateToOneWithWhereWithoutCampaignsInput, SegmentUpdateWithoutCampaignsInput>, SegmentUncheckedUpdateWithoutCampaignsInput>
  }

  export type MessageLogUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MessageLogCreateWithoutCampaignInput, MessageLogUncheckedCreateWithoutCampaignInput> | MessageLogCreateWithoutCampaignInput[] | MessageLogUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutCampaignInput | MessageLogCreateOrConnectWithoutCampaignInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutCampaignInput | MessageLogUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MessageLogCreateManyCampaignInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutCampaignInput | MessageLogUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutCampaignInput | MessageLogUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutLogsInput = {
    create?: XOR<CampaignCreateWithoutLogsInput, CampaignUncheckedCreateWithoutLogsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLogsInput
    connect?: CampaignWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CampaignUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<CampaignCreateWithoutLogsInput, CampaignUncheckedCreateWithoutLogsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLogsInput
    upsert?: CampaignUpsertWithoutLogsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutLogsInput, CampaignUpdateWithoutLogsInput>, CampaignUncheckedUpdateWithoutLogsInput>
  }

  export type SegmentCreateNestedManyWithoutContactsInput = {
    create?: XOR<SegmentCreateWithoutContactsInput, SegmentUncheckedCreateWithoutContactsInput> | SegmentCreateWithoutContactsInput[] | SegmentUncheckedCreateWithoutContactsInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutContactsInput | SegmentCreateOrConnectWithoutContactsInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type SegmentUncheckedCreateNestedManyWithoutContactsInput = {
    create?: XOR<SegmentCreateWithoutContactsInput, SegmentUncheckedCreateWithoutContactsInput> | SegmentCreateWithoutContactsInput[] | SegmentUncheckedCreateWithoutContactsInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutContactsInput | SegmentCreateOrConnectWithoutContactsInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type SegmentUpdateManyWithoutContactsNestedInput = {
    create?: XOR<SegmentCreateWithoutContactsInput, SegmentUncheckedCreateWithoutContactsInput> | SegmentCreateWithoutContactsInput[] | SegmentUncheckedCreateWithoutContactsInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutContactsInput | SegmentCreateOrConnectWithoutContactsInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutContactsInput | SegmentUpsertWithWhereUniqueWithoutContactsInput[]
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutContactsInput | SegmentUpdateWithWhereUniqueWithoutContactsInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutContactsInput | SegmentUpdateManyWithWhereWithoutContactsInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type SegmentUncheckedUpdateManyWithoutContactsNestedInput = {
    create?: XOR<SegmentCreateWithoutContactsInput, SegmentUncheckedCreateWithoutContactsInput> | SegmentCreateWithoutContactsInput[] | SegmentUncheckedCreateWithoutContactsInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutContactsInput | SegmentCreateOrConnectWithoutContactsInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutContactsInput | SegmentUpsertWithWhereUniqueWithoutContactsInput[]
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutContactsInput | SegmentUpdateWithWhereUniqueWithoutContactsInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutContactsInput | SegmentUpdateManyWithWhereWithoutContactsInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type ContactCreateNestedManyWithoutSegmentsInput = {
    create?: XOR<ContactCreateWithoutSegmentsInput, ContactUncheckedCreateWithoutSegmentsInput> | ContactCreateWithoutSegmentsInput[] | ContactUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutSegmentsInput | ContactCreateOrConnectWithoutSegmentsInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutSegmentInput = {
    create?: XOR<CampaignCreateWithoutSegmentInput, CampaignUncheckedCreateWithoutSegmentInput> | CampaignCreateWithoutSegmentInput[] | CampaignUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutSegmentInput | CampaignCreateOrConnectWithoutSegmentInput[]
    createMany?: CampaignCreateManySegmentInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutSegmentsInput = {
    create?: XOR<ContactCreateWithoutSegmentsInput, ContactUncheckedCreateWithoutSegmentsInput> | ContactCreateWithoutSegmentsInput[] | ContactUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutSegmentsInput | ContactCreateOrConnectWithoutSegmentsInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: XOR<CampaignCreateWithoutSegmentInput, CampaignUncheckedCreateWithoutSegmentInput> | CampaignCreateWithoutSegmentInput[] | CampaignUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutSegmentInput | CampaignCreateOrConnectWithoutSegmentInput[]
    createMany?: CampaignCreateManySegmentInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type ContactUpdateManyWithoutSegmentsNestedInput = {
    create?: XOR<ContactCreateWithoutSegmentsInput, ContactUncheckedCreateWithoutSegmentsInput> | ContactCreateWithoutSegmentsInput[] | ContactUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutSegmentsInput | ContactCreateOrConnectWithoutSegmentsInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutSegmentsInput | ContactUpsertWithWhereUniqueWithoutSegmentsInput[]
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutSegmentsInput | ContactUpdateWithWhereUniqueWithoutSegmentsInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutSegmentsInput | ContactUpdateManyWithWhereWithoutSegmentsInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<CampaignCreateWithoutSegmentInput, CampaignUncheckedCreateWithoutSegmentInput> | CampaignCreateWithoutSegmentInput[] | CampaignUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutSegmentInput | CampaignCreateOrConnectWithoutSegmentInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutSegmentInput | CampaignUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: CampaignCreateManySegmentInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutSegmentInput | CampaignUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutSegmentInput | CampaignUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutSegmentsNestedInput = {
    create?: XOR<ContactCreateWithoutSegmentsInput, ContactUncheckedCreateWithoutSegmentsInput> | ContactCreateWithoutSegmentsInput[] | ContactUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutSegmentsInput | ContactCreateOrConnectWithoutSegmentsInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutSegmentsInput | ContactUpsertWithWhereUniqueWithoutSegmentsInput[]
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutSegmentsInput | ContactUpdateWithWhereUniqueWithoutSegmentsInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutSegmentsInput | ContactUpdateManyWithWhereWithoutSegmentsInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<CampaignCreateWithoutSegmentInput, CampaignUncheckedCreateWithoutSegmentInput> | CampaignCreateWithoutSegmentInput[] | CampaignUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutSegmentInput | CampaignCreateOrConnectWithoutSegmentInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutSegmentInput | CampaignUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: CampaignCreateManySegmentInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutSegmentInput | CampaignUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutSegmentInput | CampaignUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MessageLogCreateWithoutCampaignInput = {
    id?: string
    contact: string
    status: string
    error?: string | null
    ivrResponse?: string | null
    duration?: number | null
    providerId?: string | null
    createdAt?: Date | string
  }

  export type MessageLogUncheckedCreateWithoutCampaignInput = {
    id?: string
    contact: string
    status: string
    error?: string | null
    ivrResponse?: string | null
    duration?: number | null
    providerId?: string | null
    createdAt?: Date | string
  }

  export type MessageLogCreateOrConnectWithoutCampaignInput = {
    where: MessageLogWhereUniqueInput
    create: XOR<MessageLogCreateWithoutCampaignInput, MessageLogUncheckedCreateWithoutCampaignInput>
  }

  export type MessageLogCreateManyCampaignInputEnvelope = {
    data: MessageLogCreateManyCampaignInput | MessageLogCreateManyCampaignInput[]
  }

  export type SegmentCreateWithoutCampaignsInput = {
    id?: string
    name: string
    contacts?: ContactCreateNestedManyWithoutSegmentsInput
  }

  export type SegmentUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    contacts?: ContactUncheckedCreateNestedManyWithoutSegmentsInput
  }

  export type SegmentCreateOrConnectWithoutCampaignsInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutCampaignsInput, SegmentUncheckedCreateWithoutCampaignsInput>
  }

  export type MessageLogUpsertWithWhereUniqueWithoutCampaignInput = {
    where: MessageLogWhereUniqueInput
    update: XOR<MessageLogUpdateWithoutCampaignInput, MessageLogUncheckedUpdateWithoutCampaignInput>
    create: XOR<MessageLogCreateWithoutCampaignInput, MessageLogUncheckedCreateWithoutCampaignInput>
  }

  export type MessageLogUpdateWithWhereUniqueWithoutCampaignInput = {
    where: MessageLogWhereUniqueInput
    data: XOR<MessageLogUpdateWithoutCampaignInput, MessageLogUncheckedUpdateWithoutCampaignInput>
  }

  export type MessageLogUpdateManyWithWhereWithoutCampaignInput = {
    where: MessageLogScalarWhereInput
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyWithoutCampaignInput>
  }

  export type MessageLogScalarWhereInput = {
    AND?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
    OR?: MessageLogScalarWhereInput[]
    NOT?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
    id?: StringFilter<"MessageLog"> | string
    campaignId?: StringFilter<"MessageLog"> | string
    contact?: StringFilter<"MessageLog"> | string
    status?: StringFilter<"MessageLog"> | string
    error?: StringNullableFilter<"MessageLog"> | string | null
    ivrResponse?: StringNullableFilter<"MessageLog"> | string | null
    duration?: IntNullableFilter<"MessageLog"> | number | null
    providerId?: StringNullableFilter<"MessageLog"> | string | null
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
  }

  export type SegmentUpsertWithoutCampaignsInput = {
    update: XOR<SegmentUpdateWithoutCampaignsInput, SegmentUncheckedUpdateWithoutCampaignsInput>
    create: XOR<SegmentCreateWithoutCampaignsInput, SegmentUncheckedCreateWithoutCampaignsInput>
    where?: SegmentWhereInput
  }

  export type SegmentUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: SegmentWhereInput
    data: XOR<SegmentUpdateWithoutCampaignsInput, SegmentUncheckedUpdateWithoutCampaignsInput>
  }

  export type SegmentUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contacts?: ContactUpdateManyWithoutSegmentsNestedInput
  }

  export type SegmentUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contacts?: ContactUncheckedUpdateManyWithoutSegmentsNestedInput
  }

  export type CampaignCreateWithoutLogsInput = {
    id?: string
    name: string
    platform: string
    provider?: string | null
    providerConfig?: string | null
    message: string
    metaToken?: string | null
    adminId?: string | null
    isTemplate?: boolean
    templateLanguage?: string | null
    messageTag?: string | null
    subject?: string | null
    audioUrl?: string | null
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    segment?: SegmentCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    platform: string
    provider?: string | null
    providerConfig?: string | null
    message: string
    metaToken?: string | null
    adminId?: string | null
    isTemplate?: boolean
    templateLanguage?: string | null
    messageTag?: string | null
    subject?: string | null
    audioUrl?: string | null
    status?: string
    scheduledAt?: Date | string | null
    segmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutLogsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutLogsInput, CampaignUncheckedCreateWithoutLogsInput>
  }

  export type CampaignUpsertWithoutLogsInput = {
    update: XOR<CampaignUpdateWithoutLogsInput, CampaignUncheckedUpdateWithoutLogsInput>
    create: XOR<CampaignCreateWithoutLogsInput, CampaignUncheckedCreateWithoutLogsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutLogsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutLogsInput, CampaignUncheckedUpdateWithoutLogsInput>
  }

  export type CampaignUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segment?: SegmentUpdateOneWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SegmentCreateWithoutContactsInput = {
    id?: string
    name: string
    campaigns?: CampaignCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUncheckedCreateWithoutContactsInput = {
    id?: string
    name: string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type SegmentCreateOrConnectWithoutContactsInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutContactsInput, SegmentUncheckedCreateWithoutContactsInput>
  }

  export type SegmentUpsertWithWhereUniqueWithoutContactsInput = {
    where: SegmentWhereUniqueInput
    update: XOR<SegmentUpdateWithoutContactsInput, SegmentUncheckedUpdateWithoutContactsInput>
    create: XOR<SegmentCreateWithoutContactsInput, SegmentUncheckedCreateWithoutContactsInput>
  }

  export type SegmentUpdateWithWhereUniqueWithoutContactsInput = {
    where: SegmentWhereUniqueInput
    data: XOR<SegmentUpdateWithoutContactsInput, SegmentUncheckedUpdateWithoutContactsInput>
  }

  export type SegmentUpdateManyWithWhereWithoutContactsInput = {
    where: SegmentScalarWhereInput
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyWithoutContactsInput>
  }

  export type SegmentScalarWhereInput = {
    AND?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
    OR?: SegmentScalarWhereInput[]
    NOT?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
    id?: StringFilter<"Segment"> | string
    name?: StringFilter<"Segment"> | string
  }

  export type ContactCreateWithoutSegmentsInput = {
    id?: string
    phone?: string | null
    email?: string | null
    lineId?: string | null
    firstName?: string | null
    lastName?: string | null
    isOptedOut?: boolean
    createdAt?: Date | string
  }

  export type ContactUncheckedCreateWithoutSegmentsInput = {
    id?: string
    phone?: string | null
    email?: string | null
    lineId?: string | null
    firstName?: string | null
    lastName?: string | null
    isOptedOut?: boolean
    createdAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutSegmentsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutSegmentsInput, ContactUncheckedCreateWithoutSegmentsInput>
  }

  export type CampaignCreateWithoutSegmentInput = {
    id?: string
    name: string
    platform: string
    provider?: string | null
    providerConfig?: string | null
    message: string
    metaToken?: string | null
    adminId?: string | null
    isTemplate?: boolean
    templateLanguage?: string | null
    messageTag?: string | null
    subject?: string | null
    audioUrl?: string | null
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: MessageLogCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutSegmentInput = {
    id?: string
    name: string
    platform: string
    provider?: string | null
    providerConfig?: string | null
    message: string
    metaToken?: string | null
    adminId?: string | null
    isTemplate?: boolean
    templateLanguage?: string | null
    messageTag?: string | null
    subject?: string | null
    audioUrl?: string | null
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: MessageLogUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutSegmentInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutSegmentInput, CampaignUncheckedCreateWithoutSegmentInput>
  }

  export type CampaignCreateManySegmentInputEnvelope = {
    data: CampaignCreateManySegmentInput | CampaignCreateManySegmentInput[]
  }

  export type ContactUpsertWithWhereUniqueWithoutSegmentsInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutSegmentsInput, ContactUncheckedUpdateWithoutSegmentsInput>
    create: XOR<ContactCreateWithoutSegmentsInput, ContactUncheckedCreateWithoutSegmentsInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutSegmentsInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutSegmentsInput, ContactUncheckedUpdateWithoutSegmentsInput>
  }

  export type ContactUpdateManyWithWhereWithoutSegmentsInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutSegmentsInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    lineId?: StringNullableFilter<"Contact"> | string | null
    firstName?: StringNullableFilter<"Contact"> | string | null
    lastName?: StringNullableFilter<"Contact"> | string | null
    isOptedOut?: BoolFilter<"Contact"> | boolean
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutSegmentInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutSegmentInput, CampaignUncheckedUpdateWithoutSegmentInput>
    create: XOR<CampaignCreateWithoutSegmentInput, CampaignUncheckedCreateWithoutSegmentInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutSegmentInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutSegmentInput, CampaignUncheckedUpdateWithoutSegmentInput>
  }

  export type CampaignUpdateManyWithWhereWithoutSegmentInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutSegmentInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    platform?: StringFilter<"Campaign"> | string
    provider?: StringNullableFilter<"Campaign"> | string | null
    providerConfig?: StringNullableFilter<"Campaign"> | string | null
    message?: StringFilter<"Campaign"> | string
    metaToken?: StringNullableFilter<"Campaign"> | string | null
    adminId?: StringNullableFilter<"Campaign"> | string | null
    isTemplate?: BoolFilter<"Campaign"> | boolean
    templateLanguage?: StringNullableFilter<"Campaign"> | string | null
    messageTag?: StringNullableFilter<"Campaign"> | string | null
    subject?: StringNullableFilter<"Campaign"> | string | null
    audioUrl?: StringNullableFilter<"Campaign"> | string | null
    status?: StringFilter<"Campaign"> | string
    scheduledAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    segmentId?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type MessageLogCreateManyCampaignInput = {
    id?: string
    contact: string
    status: string
    error?: string | null
    ivrResponse?: string | null
    duration?: number | null
    providerId?: string | null
    createdAt?: Date | string
  }

  export type MessageLogUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ivrResponse?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ivrResponse?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ivrResponse?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SegmentUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    campaigns?: CampaignUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    campaigns?: CampaignUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateManyWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreateManySegmentInput = {
    id?: string
    name: string
    platform: string
    provider?: string | null
    providerConfig?: string | null
    message: string
    metaToken?: string | null
    adminId?: string | null
    isTemplate?: boolean
    templateLanguage?: string | null
    messageTag?: string | null
    subject?: string | null
    audioUrl?: string | null
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lineId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isOptedOut?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lineId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isOptedOut?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lineId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isOptedOut?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: MessageLogUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: MessageLogUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metaToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    templateLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    messageTag?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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