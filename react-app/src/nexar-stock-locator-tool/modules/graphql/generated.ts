import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Decimal: any;
  Map: any;
  MultiplierPath: any;
  Name: any;
  Time: any;
};

/** An application belonging to an organization which facilitates access. Users interact with the Nexar API through applications. */
export type AdmApplication = {
  __typename?: 'AdmApplication';
  /** When this application was created. */
  createdDate: Scalars['DateTime'];
  /** Whether or not this application has been deleted. */
  deleted: Scalars['Boolean'];
  /** The description of this application. */
  description?: Maybe<Scalars['String']>;
  /** A unique identifier for the application. */
  id: Scalars['String'];
  /** The name of this application. */
  name: Scalars['String'];
  /** The organization to which this application belongs. */
  organizationId?: Maybe<Scalars['String']>;
  /** The scopes assigned to this application. */
  scopes: Array<AdmApplicationScope>;
  /** Security detail for this application, such as its client id and secret. */
  security: AdmApplicationSecurity;
  /** Information about supply quota if this application has the supply scope. */
  supplyCounts?: Maybe<AdmSupplyCounts>;
};

/** A scope for an application, e.g. design, supply or manufacturing. */
export type AdmApplicationScope = {
  __typename?: 'AdmApplicationScope';
  /** The application to which this scope applies. */
  applicationId: Scalars['String'];
  /** The scope to which the application has been granted access. */
  scope: Scalars['String'];
};

/** Security access details for an application. */
export type AdmApplicationSecurity = {
  __typename?: 'AdmApplicationSecurity';
  /** The application to which this scope applies. */
  applicationId: Scalars['String'];
  /** The unique client id for this application. */
  clientId: Scalars['String'];
  /** The unique client secret for this application. Guard this secret carefully! */
  clientSecret: Scalars['String'];
};

/** An Organization is an entity representing a partner, company or individual engaging with Nexar. */
export type AdmOrganization = {
  __typename?: 'AdmOrganization';
  /** The applications belonging to this organization through which users interact with the API. */
  applications: Array<AdmApplication>;
  /** When this organization was created. */
  createdDate: Scalars['DateTime'];
  /** A unique identifier for the organization. */
  id: Scalars['String'];
  /** Invitations sent for others to join this organization. */
  invitations: Array<AdmUserInvitation>;
  /** Whether this is the current user's default organization. */
  isDefault: Scalars['Boolean'];
  /** The name of this organization. */
  name: Scalars['String'];
  /** The users belonging to this organization. */
  users: Array<AdmUser>;
};

/** Supply count information for supply applications. */
export type AdmSupplyCounts = {
  __typename?: 'AdmSupplyCounts';
  /** The count of supply parts used this month. */
  partCounter: Scalars['Int'];
  /** The monthly quota of parts which can be returned through supply API queries. */
  partLimit: Scalars['Int'];
};

/** A user represents and individual who can login to Nexar and interact with API through applications of this organization. */
export type AdmUser = {
  __typename?: 'AdmUser';
  /** When the user was created in the system. */
  createdDate: Scalars['DateTime'];
  /** The user's first name. */
  firstName: Scalars['String'];
  /** A unique identifier for the user. */
  id: Scalars['String'];
  /** The user's last name. */
  lastName: Scalars['String'];
  /** The email address for the user used as their username. */
  userName: Scalars['String'];
};

/** An invitation sent for a user to join an invitation. */
export type AdmUserInvitation = {
  __typename?: 'AdmUserInvitation';
  /** Whether or not the user accepted the invitation to join the organization. */
  accepted: Scalars['Boolean'];
  /** The email of the user receiving the invitation to join the organization. */
  email?: Maybe<Scalars['String']>;
  /** The organization to which the user has been invited. */
  organizationId?: Maybe<Scalars['String']>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfDoubleOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  ngt?: InputMaybe<Scalars['Float']>;
  ngte?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nlt?: InputMaybe<Scalars['Float']>;
  nlte?: InputMaybe<Scalars['Float']>;
};

export type DatBomAnalysis = {
  __typename?: 'DatBomAnalysis';
  items: Array<DatBomPartItem>;
  level: DatBomAnalysisLevel;
  message: Scalars['String'];
};

export type DatBomAnalysisBomItem = {
  __typename?: 'DatBomAnalysisBomItem';
  bomItemId: Scalars['String'];
  partId?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
};

export type DatBomAnalysisBomItemInput = {
  bomItemId: Scalars['String'];
  partId?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
};

export type DatBomAnalysisItems = {
  __typename?: 'DatBomAnalysisItems';
  bomId: Scalars['String'];
  bomItems: Array<DatBomAnalysisBomItem>;
  version: Scalars['Int'];
};

export type DatBomAnalysisItemsInput = {
  bomId: Scalars['String'];
  bomItems: Array<DatBomAnalysisBomItemInput>;
  version: Scalars['Int'];
};

export enum DatBomAnalysisLevel {
  Error = 'ERROR',
  Suggestion = 'SUGGESTION',
  Warning = 'WARNING'
}

export type DatBomAnalysisPayload = {
  __typename?: 'DatBomAnalysisPayload';
  analysisResults: Array<DatBomAnalysisResult>;
  bomId: Scalars['String'];
  version: Scalars['Int'];
};

export type DatBomAnalysisResult = {
  __typename?: 'DatBomAnalysisResult';
  bomItemIds: Array<Scalars['String']>;
  level: DatBomAnalysisResultLevel;
  message: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
};

export enum DatBomAnalysisResultLevel {
  Error = 'ERROR',
  Suggestion = 'SUGGESTION',
  Warning = 'WARNING'
}

export type DatBomItemInput = {
  itemRefId?: InputMaybe<Scalars['String']>;
  manufacturerName?: InputMaybe<Scalars['String']>;
  mpn?: InputMaybe<Scalars['String']>;
};

export type DatBomPart = {
  __typename?: 'DatBomPart';
  confidence: Scalars['Float'];
  partId: Scalars['String'];
  strategy: DatBomPartSearchStrategy;
};

export type DatBomPartHistory = {
  __typename?: 'DatBomPartHistory';
  threeMonthGrowthPercentage: Scalars['Float'];
};

export type DatBomPartItem = {
  __typename?: 'DatBomPartItem';
  itemRefId?: Maybe<Scalars['String']>;
  partId: Scalars['String'];
  quantity: Scalars['Int'];
};

export type DatBomPartItemInput = {
  itemRefId?: InputMaybe<Scalars['String']>;
  partId: Scalars['String'];
  quantity: Scalars['Int'];
};

export enum DatBomPartSearchStrategy {
  Exact = 'EXACT',
  Fuzzy = 'FUZZY',
  Partial = 'PARTIAL'
}

export type DatBomPartsResult = {
  __typename?: 'DatBomPartsResult';
  itemRefId?: Maybe<Scalars['String']>;
  parts: Array<DatBomPart>;
};

export type DatEddiCategory = {
  __typename?: 'DatEddiCategory';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type DatEddiCategoryFilterInput = {
  and?: InputMaybe<Array<DatEddiCategoryFilterInput>>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DatEddiCategoryFilterInput>>;
};

export type DatEddiEdition = {
  __typename?: 'DatEddiEdition';
  eddiTimeSeries: Array<DatEddiTimeSeries>;
  id: Scalars['Int'];
  releaseDate: Scalars['DateTime'];
  title: Scalars['String'];
};


export type DatEddiEditionEddiTimeSeriesArgs = {
  where?: InputMaybe<DatEddiTimeSeriesFilterInput>;
};

export type DatEddiIndex = {
  __typename?: 'DatEddiIndex';
  demandIndex?: Maybe<Scalars['Float']>;
  indexDate: Scalars['DateTime'];
  supplyIndex?: Maybe<Scalars['Float']>;
};

export type DatEddiIndexFilterInput = {
  and?: InputMaybe<Array<DatEddiIndexFilterInput>>;
  demandIndex?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  indexDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<DatEddiIndexFilterInput>>;
  supplyIndex?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
};

export type DatEddiTimeSeries = {
  __typename?: 'DatEddiTimeSeries';
  category?: Maybe<DatEddiCategory>;
  children?: Maybe<Array<DatEddiTimeSeries>>;
  indices: Array<DatEddiIndex>;
};


export type DatEddiTimeSeriesChildrenArgs = {
  where?: InputMaybe<DatEddiTimeSeriesFilterInput>;
};


export type DatEddiTimeSeriesIndicesArgs = {
  where?: InputMaybe<DatEddiIndexFilterInput>;
};

export type DatEddiTimeSeriesFilterInput = {
  and?: InputMaybe<Array<DatEddiTimeSeriesFilterInput>>;
  category?: InputMaybe<DatEddiCategoryFilterInput>;
  or?: InputMaybe<Array<DatEddiTimeSeriesFilterInput>>;
};

/** A generic `dat` domain error. */
export type DatError = {
  /** A short description of the error. */
  message: Scalars['String'];
};

export type DatManufacturer = {
  __typename?: 'DatManufacturer';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type DatManufacturerInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type DatResolvedBomItem = {
  __typename?: 'DatResolvedBomItem';
  bomItemId: Scalars['String'];
  manufacturerParts: Array<DatResolvedBomPart>;
};

export type DatResolvedBomItemInput = {
  bomItemId: Scalars['String'];
  manufacturerParts: Array<DatResolvedBomPartInput>;
};

export type DatResolvedBomItemsPayload = {
  __typename?: 'DatResolvedBomItemsPayload';
  bomId: Scalars['String'];
  bomItems: Array<DatResolvedBomItem>;
  version: Scalars['Int'];
};

export type DatResolvedBomItemsPayloadInput = {
  bomId: Scalars['String'];
  bomItems: Array<DatResolvedBomItemInput>;
  version: Scalars['Int'];
};

export type DatResolvedBomPart = {
  __typename?: 'DatResolvedBomPart';
  confidence: Scalars['Float'];
  manufacturer: DatManufacturer;
  mpn: Scalars['String'];
  partId: Scalars['String'];
};

export type DatResolvedBomPartInput = {
  confidence: Scalars['Float'];
  manufacturer: DatManufacturerInput;
  mpn: Scalars['String'];
  partId: Scalars['String'];
};

/** A mapping to rename column headers in the CSV to known fields */
export type DatScrColumnMapInput = {
  /** Name of the CSV column that corresponds to the estimated annual usage */
  eau?: InputMaybe<Scalars['String']>;
  /** Name of the CSV column that corresponds to the name of the manufacturer */
  manufacturer?: InputMaybe<Scalars['String']>;
  /** Name of the CSV column that corresponds to the manufacturer's part number */
  mpn?: InputMaybe<Scalars['String']>;
  /** Name of the CSV column that corresponds to an internal part number */
  pn?: InputMaybe<Scalars['String']>;
};

/** Error indicating that the SCR processing run could not be deleted. */
export type DatScrCouldNotDeleteJobError = DatError & {
  __typename?: 'DatScrCouldNotDeleteJobError';
  /** Job to be deleted. */
  job: DatScrJob;
  message: Scalars['String'];
};

export type DatScrCreateJobError = DatScrQuotaExceededError;

/** Input data to create an SCR job. */
export type DatScrCreateJobInput = {
  /** The name remapping of the CSV columns. */
  columnMapping?: InputMaybe<DatScrColumnMapInput>;
  /** The Nexar file ID which contains the data to process in CSV format. */
  fileId: Scalars['String'];
  /** A label to add to the job for easier reference. */
  label?: InputMaybe<Scalars['String']>;
};

export type DatScrCreateJobPayload = {
  __typename?: 'DatScrCreateJobPayload';
  datScrJob?: Maybe<DatScrJob>;
  errors?: Maybe<Array<DatScrCreateJobError>>;
};

export type DatScrDeleteJobError = DatScrCouldNotDeleteJobError;

/** Input data to delete an SCR job. */
export type DatScrDeleteJobInput = {
  /** The ID of the job to delete. */
  jobId: Scalars['String'];
};

export type DatScrDeleteJobPayload = {
  __typename?: 'DatScrDeleteJobPayload';
  datScrJob?: Maybe<DatScrJob>;
  errors?: Maybe<Array<DatScrDeleteJobError>>;
};

/** Contains information about an SCR processing job. */
export type DatScrJob = {
  __typename?: 'DatScrJob';
  /** The ID of this job. */
  jobId: Scalars['String'];
  /** A small message relating to running of the job. */
  jobMessage?: Maybe<Scalars['String']>;
  /** The current state of the job. */
  jobState: DatScrJobState;
  /** An optional label to easily identify the job. */
  label?: Maybe<Scalars['String']>;
  /** Statistics relating to the running of this job. */
  runStats?: Maybe<DatScrRunStats>;
  /** The date and time of when the job was requested. */
  uploadDatetime: Scalars['DateTime'];
  /** The ID of the user who owns the job. */
  userId: Scalars['String'];
};

/** Possible states of an SCR processing run. */
export enum DatScrJobState {
  /** Job has completed successfully. */
  Completed = 'COMPLETED',
  /** The job has failed to process the data. */
  Failed = 'FAILED',
  /** The job is still processing the data. */
  Running = 'RUNNING',
  /** Job is in an unknown state. */
  Unknown = 'UNKNOWN'
}

/** Error indicates that the user has exceeded their quota. */
export type DatScrQuotaExceededError = DatError & {
  __typename?: 'DatScrQuotaExceededError';
  message: Scalars['String'];
  /** The number of allowed parts resolved for the current period. */
  quota: Scalars['Int'];
  /** The number of distinct parts resolved for the user in the current period. */
  usage: Scalars['Int'];
};

/** A supply-chain resilience report. */
export type DatScrReport = {
  __typename?: 'DatScrReport';
  /** A URL to download this report. */
  downloadUrl: Scalars['String'];
  /** The SCR job that created this report. */
  jobId: Scalars['String'];
};

/** Statistics relating to the running of a job. Procurability here is with respect to a given EAU (estimated annual usage). */
export type DatScrRunStats = {
  __typename?: 'DatScrRunStats';
  /** Number of parts that were procurable last week that are now non-procurable. */
  numDestocked?: Maybe<Scalars['Int']>;
  /** Number of parts with a historical procurability between zero and one. */
  numHpIntervalParts?: Maybe<Scalars['Int']>;
  /** Number of parts with complete historical procurability. */
  numHpOneParts?: Maybe<Scalars['Int']>;
  /** Number of parts with no historical procurability. */
  numHpZeroParts?: Maybe<Scalars['Int']>;
  /** Number of parts that were procurable seven days ago. */
  numProc7dAgo?: Maybe<Scalars['Int']>;
  /** Number of parts that were procurable 14 days ago. */
  numProc14dAgo?: Maybe<Scalars['Int']>;
  /** Number of parts that were procurable 21 days ago. */
  numProc21dAgo?: Maybe<Scalars['Int']>;
  /** Number of parts that were procurable 28 days ago. */
  numProc28dAgo?: Maybe<Scalars['Int']>;
  /** Number of parts that are currently procurable. */
  numProcCurrent?: Maybe<Scalars['Int']>;
  /** Total number of parts resolved. */
  numResolvedParts?: Maybe<Scalars['Int']>;
  /** Number of parts that were not procurable last week that are now procurable. */
  numRestocked?: Maybe<Scalars['Int']>;
  /** Total number of parts requested for processing. */
  numTotalParts?: Maybe<Scalars['Int']>;
};

/** User's metered usage statistics. */
export type DatScrUsage = {
  __typename?: 'DatScrUsage';
  /** Total number of distinct resolved parts within the current period. */
  countDistinctParts: Scalars['Int'];
  /** The start date of the current period. */
  fromDate: Scalars['String'];
  /** Allowed quota of the user within the current period. */
  quota: Scalars['Int'];
};

export type DatUnresolvedBomFileInput = {
  bomId: Scalars['String'];
  fileId: Scalars['String'];
  version: Scalars['Int'];
};

export type DatUnresolvedBomItem = {
  __typename?: 'DatUnresolvedBomItem';
  bomItemId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ipn?: Maybe<Scalars['String']>;
  manufacturerName: Scalars['String'];
  mpn: Scalars['String'];
};

export type DatUnresolvedBomItemInput = {
  bomItemId: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  ipn?: InputMaybe<Scalars['String']>;
  manufacturerName: Scalars['String'];
  mpn: Scalars['String'];
};

export type DatUnresolvedBomItems = {
  __typename?: 'DatUnresolvedBomItems';
  bomId: Scalars['String'];
  bomItems: Array<DatUnresolvedBomItem>;
  version: Scalars['Int'];
};

export type DatUnresolvedBomItemsInput = {
  bomId: Scalars['String'];
  bomItems: Array<DatUnresolvedBomItemInput>;
  version: Scalars['Int'];
};

export type DesAddUsersToGroupInput = {
  /** The group node ID. */
  id: Scalars['ID'];
  /** User IDs. */
  userIds: Array<Scalars['String']>;
};

export type DesAddUsersToGroupPayload = {
  __typename?: 'DesAddUsersToGroupPayload';
  errors: Array<DesPayloadError>;
};

export type DesArea = {
  __typename?: 'DesArea';
  x: Scalars['Float'];
  xMils2: Scalars['Decimal'];
  xMm2: Scalars['Decimal'];
};

export type DesAssemblyDrawings = {
  __typename?: 'DesAssemblyDrawings';
  assemblyDrawingFiles: Array<DesDownloadableFile>;
  downloadUrl?: Maybe<Scalars['String']>;
  packageName?: Maybe<Scalars['String']>;
};

/** A Bill of Materials (BOM) contains a list of all of the parts needed for the assembly of a PCB. */
export type DesBom = Node & {
  __typename?: 'DesBom';
  /** The list of each unique part within the BOM. */
  bomItems: Array<DesBomItem>;
  /** The node identifier for this BOM (used by `desBomById`). */
  id: Scalars['ID'];
};

/** A Bill of Materials (BOM) item contains usage information for a unique component on the PCB. */
export type DesBomItem = {
  __typename?: 'DesBomItem';
  /** The list of each instance of this BOM item. */
  bomItemInstances: Array<DesBomItemInstance>;
  /** The detailed component information for this BOM item. */
  component?: Maybe<DesComponent>;
  /** The total number of times this item is used. */
  quantity: Scalars['Decimal'];
};

/** A Bill of Materials (BOM) item instance contains information for one specific use case of the item. */
export type DesBomItemInstance = {
  __typename?: 'DesBomItemInstance';
  /** The unique label for this item. */
  designator: Scalars['String'];
  /** The variant use status for this item. */
  isFitted: Scalars['Boolean'];
};

/** *** PROTOTYPE, SUBJECT TO CHANGE *** */
export type DesCollaborationSimulationFile = {
  __typename?: 'DesCollaborationSimulationFile';
  downloadUrl: Scalars['String'];
  fileTypeName: Scalars['String'];
};

export type DesCollaborationSimulationFileInput = {
  fileId: Scalars['String'];
  fileName: Scalars['String'];
  fileType: Scalars['String'];
};

/** *** PROTOTYPE, SUBJECT TO CHANGE *** */
export type DesCollaborationSimulationRevision = {
  __typename?: 'DesCollaborationSimulationRevision';
  createdAt: Scalars['DateTime'];
  createdBy: DesUser;
  files: Array<DesCollaborationSimulationFile>;
  metadata: Scalars['String'];
};

/** A connection to a list of items. */
export type DesCollaborationSimulationRevisionConnection = {
  __typename?: 'DesCollaborationSimulationRevisionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DesCollaborationSimulationRevisionEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DesCollaborationSimulationRevision>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type DesCollaborationSimulationRevisionEdge = {
  __typename?: 'DesCollaborationSimulationRevisionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DesCollaborationSimulationRevision;
};

/** A comment is one of remarks associated with a comment thread or task. */
export type DesComment = {
  __typename?: 'DesComment';
  /** The comment reference ID. */
  commentId: Scalars['String'];
  /** The creation date. */
  createdAt: Scalars['DateTime'];
  /** The user who created the comment. */
  createdBy: DesUser;
  /** The users mentioned by this comment. */
  mentions: Array<DesMention>;
  /** The last modification date. */
  modifiedAt: Scalars['DateTime'];
  /** The user who modified the comment. */
  modifiedBy: DesUser;
  /** The comment text. */
  text: Scalars['String'];
};

/** A comment context provides additional information about associations for a comment thread. */
export type DesCommentContext = {
  __typename?: 'DesCommentContext';
  /** The area associated with a comment thread. */
  area: DesRectangle;
  /** The reference identifier for the document associated with a comment thread. */
  documentId?: Maybe<Scalars['String']>;
  /** The reference identifier for an object associated with a comment thread. */
  objectId?: Maybe<Scalars['String']>;
  /** The release identifier associated with a comment thread. */
  releaseId?: Maybe<Scalars['String']>;
};

export type DesCommentNotification = {
  __typename?: 'DesCommentNotification';
  action: Scalars['String'];
  data: DesCommentNotificationData;
};

export type DesCommentNotificationData = {
  __typename?: 'DesCommentNotificationData';
  commentAuthor?: Maybe<Scalars['String']>;
  commentDate: Scalars['String'];
  commentId: Scalars['String'];
  commentText?: Maybe<Scalars['String']>;
  commentThreadId: Scalars['String'];
  documentId?: Maybe<Scalars['String']>;
  documentName?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  threadData?: Maybe<Scalars['String']>;
  threadDate: Scalars['String'];
  threadStatus?: Maybe<Scalars['String']>;
};

/** A comment thread contains an initial remark associated with the design and a collection of replies. */
export type DesCommentThread = {
  __typename?: 'DesCommentThread';
  /** The account information for the owner of any action or response to this comment thread. */
  assignedTo?: Maybe<DesUser>;
  /** The reference identifier for this comment thread (used by `desCreateComment`, `desDeleteComment`, `desUpdateComment`). */
  commentThreadId: Scalars['String'];
  /** The list of replies associated with this comment thread. */
  comments: Array<DesComment>;
  /** The information about properties related to this comment thread. */
  context: DesCommentContext;
  /** The `DateTime` for the creation of this comment thread. */
  createdAt: Scalars['DateTime'];
  /** The account information for who created this comment thread. */
  createdBy: DesUser;
  /** The `DateTime` for the most recent modification of this comment thread. */
  modifiedAt: Scalars['DateTime'];
  /** The account information for who most recently modified this comment thread. */
  modifiedBy: DesUser;
  /** The web address to download the screenshot associated with the creation of this comment thread. */
  originalStateScreenshotUrl?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  /** The sequence number of this comment thread. */
  threadNumber: Scalars['Int'];
};

/** A component contains the parametric details of a PCB part. */
export type DesComponent = Node & {
  __typename?: 'DesComponent';
  /** The additional information for this component. */
  comment: Scalars['String'];
  /** The summary of function or other performance details for this component. */
  description: Scalars['String'];
  /** More component data, relatively expensive, recommended for individual components with `desComponentById`. */
  details: DesComponentDetails;
  /** The component folder. */
  folder?: Maybe<DesFolder>;
  /** The node identifier for this component (used by `desComponentById`). */
  id: Scalars['ID'];
  /** The list of the part choices associated with this component. */
  manufacturerParts: Array<DesManufacturerPart>;
  model3D?: Maybe<DesModel3D>;
  /** The library label for this component. */
  name: Scalars['String'];
  /** The component revision. */
  revision: DesRevision;
};

/** A connection to a list of items. */
export type DesComponentConnection = {
  __typename?: 'DesComponentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DesComponentEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DesComponent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DesComponentDetails = {
  __typename?: 'DesComponentDetails';
  /** The list of the footprints used this component. */
  footprints: Array<DesFootprint>;
  /** The list of the parameters describing this component. */
  parameters: Array<DesComponentParameter>;
  /** The list of the symbols used for this component. */
  symbols: Array<DesSymbol>;
};

/** An edge in a connection. */
export type DesComponentEdge = {
  __typename?: 'DesComponentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DesComponent;
};

/** A component contains the parametric details of a PCB part. */
export type DesComponentFilterInput = {
  and?: InputMaybe<Array<DesComponentFilterInput>>;
  /** The additional information for this component. */
  comment?: InputMaybe<StringOperationFilterInput>;
  /** The summary of function or other performance details for this component. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** The library label for this component. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesComponentFilterInput>>;
  /** The component revision. */
  revision?: InputMaybe<DesRevisionFilterInput>;
};

export type DesComponentParameter = {
  __typename?: 'DesComponentParameter';
  name: Scalars['String'];
  type: DesParameterType;
  value: Scalars['String'];
};

export enum DesContentTypeKind {
  BinaryFile = 'BINARY_FILE',
  BmsAutoGeneratedComponents = 'BMS_AUTO_GENERATED_COMPONENTS',
  BomTemplate = 'BOM_TEMPLATE',
  Component = 'COMPONENT',
  ComponentTemplate = 'COMPONENT_TEMPLATE',
  DataClass = 'DATA_CLASS',
  DataSheet = 'DATA_SHEET',
  DeviceClass = 'DEVICE_CLASS',
  DraftsmanDocumentTemplate = 'DRAFTSMAN_DOCUMENT_TEMPLATE',
  DraftsmanSheetTemplate = 'DRAFTSMAN_SHEET_TEMPLATE',
  DxpAddon = 'DXP_ADDON',
  DxpPlatform = 'DXP_PLATFORM',
  DxpPlugin = 'DXP_PLUGIN',
  DxpSdk = 'DXP_SDK',
  EmbeddedDesign = 'EMBEDDED_DESIGN',
  FpgaDesign = 'FPGA_DESIGN',
  LayerStack = 'LAYER_STACK',
  Model3D = 'MODEL3D',
  MorfikPackage = 'MORFIK_PACKAGE',
  MorfikWebResource = 'MORFIK_WEB_RESOURCE',
  MorfikXAppDesign = 'MORFIK_X_APP_DESIGN',
  MorfikXAppImage = 'MORFIK_X_APP_IMAGE',
  MorfikXAppSet = 'MORFIK_X_APP_SET',
  OpenBus = 'OPEN_BUS',
  OutputJob = 'OUTPUT_JOB',
  PartChoiceList = 'PART_CHOICE_LIST',
  PcbAssembly = 'PCB_ASSEMBLY',
  PcbBlank = 'PCB_BLANK',
  PcbBlock = 'PCB_BLOCK',
  PcbComponent = 'PCB_COMPONENT',
  PcbDesign = 'PCB_DESIGN',
  PcbDocument = 'PCB_DOCUMENT',
  PcbModel3D = 'PCB_MODEL3D',
  PlmInstance = 'PLM_INSTANCE',
  PlmPublishTemplate = 'PLM_PUBLISH_TEMPLATE',
  Preferences = 'PREFERENCES',
  Project = 'PROJECT',
  ProjectReviewPackage = 'PROJECT_REVIEW_PACKAGE',
  ProjectTemplate = 'PROJECT_TEMPLATE',
  RichText = 'RICH_TEXT',
  SchematicSheet = 'SCHEMATIC_SHEET',
  SchematicTemplate = 'SCHEMATIC_TEMPLATE',
  Script = 'SCRIPT',
  SimulationModel = 'SIMULATION_MODEL',
  SiModel = 'SI_MODEL',
  Symbol = 'SYMBOL',
  WebItem = 'WEB_ITEM'
}

export type DesCreateCommentInput = {
  commentThreadId: Scalars['String'];
  entityId: Scalars['ID'];
  text: Scalars['String'];
};

export type DesCreateCommentPayload = {
  __typename?: 'DesCreateCommentPayload';
  commentId: Scalars['String'];
  errors: Array<DesPayloadError>;
};

export type DesCreateCommentThreadInput = {
  area?: InputMaybe<DesRectangleInput>;
  documentId: Scalars['String'];
  entityId: Scalars['ID'];
  objectId?: InputMaybe<Scalars['String']>;
  releaseId?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type DesCreateCommentThreadPayload = {
  __typename?: 'DesCreateCommentThreadPayload';
  commentId: Scalars['String'];
  commentThreadId: Scalars['String'];
  errors: Array<DesPayloadError>;
};

export type DesCreateManufacturePackageInput = {
  /** A webhook URL that will receive a POST request when the manufacture package has been created and shared. */
  callbackUrl?: InputMaybe<Scalars['String']>;
  /** A description for the package. */
  description?: InputMaybe<Scalars['String']>;
  /** The name for the package. */
  name: Scalars['String'];
  /** The ID of the project to create a manufacture package from. */
  projectId: Scalars['ID'];
  /** The email addresses of the manufacturers to share the package with. */
  shareWith: Array<Scalars['String']>;
  /** The project variant to use when creating the package. If not provided, the default variant is used. */
  variantName?: InputMaybe<Scalars['String']>;
  /** The Git commit which determines the version of the project to use. If not provided, the latest version is used. */
  vcsRevisionId?: InputMaybe<Scalars['String']>;
};

export type DesCreateManufacturePackagePayload = {
  __typename?: 'DesCreateManufacturePackagePayload';
  errors: Array<DesPayloadError>;
  jobId: Scalars['ID'];
};

export type DesCreateProjectTaskInput = {
  /** The project node ID. */
  projectId: Scalars['ID'];
  /** The new task data. */
  task: DesCreateTaskInput;
};

export type DesCreateTaskCommentInput = {
  /** The task node ID. */
  taskId: Scalars['ID'];
  /** The comment text. */
  text: Scalars['String'];
};

export type DesCreateTaskCommentPayload = {
  __typename?: 'DesCreateTaskCommentPayload';
  comment?: Maybe<DesComment>;
  errors: Array<DesPayloadError>;
};

export type DesCreateTaskInput = {
  /** New task description. */
  description: Scalars['String'];
  /** New task name. */
  name: Scalars['String'];
  /** Optional task priority. */
  priority?: InputMaybe<DesTaskPriority>;
  /** Optional task status. */
  status?: InputMaybe<DesTaskStatus>;
};

export type DesCreateTaskPayload = {
  __typename?: 'DesCreateTaskPayload';
  errors: Array<DesPayloadError>;
  /** The created task. */
  task: DesTask;
};

export type DesCreateUserGroupInput = {
  name: Scalars['String'];
  workspaceUrl: Scalars['String'];
};

export type DesCreateUserGroupPayload = {
  __typename?: 'DesCreateUserGroupPayload';
  id: Scalars['ID'];
};

export type DesCreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  userName: Scalars['String'];
  workspaceUrl: Scalars['String'];
};

export type DesCreateUserPayload = {
  __typename?: 'DesCreateUserPayload';
  userId: Scalars['String'];
};

export type DesCreateWorkspaceTaskInput = {
  /** The new task data. */
  task: DesCreateTaskInput;
  /** The workspace URL. */
  workspaceUrl: Scalars['String'];
};

export type DesDeleteCommentInput = {
  commentId: Scalars['String'];
  commentThreadId: Scalars['String'];
  entityId: Scalars['ID'];
};

export type DesDeleteCommentPayload = {
  __typename?: 'DesDeleteCommentPayload';
  errors: Array<DesPayloadError>;
};

export type DesDeleteCommentThreadInput = {
  commentThreadId: Scalars['String'];
  entityId: Scalars['ID'];
};

export type DesDeleteCommentThreadPayload = {
  __typename?: 'DesDeleteCommentThreadPayload';
  errors: Array<DesPayloadError>;
};

export type DesDeleteTaskCommentInput = {
  /** The comment ID. */
  commentId: Scalars['String'];
  /** The task node ID. */
  taskId: Scalars['ID'];
};

export type DesDeleteTaskCommentPayload = {
  __typename?: 'DesDeleteTaskCommentPayload';
  errors: Array<DesPayloadError>;
};

export type DesDeleteTaskInput = {
  /** The task node ID. */
  taskId: Scalars['ID'];
};

export type DesDeleteTaskPayload = {
  __typename?: 'DesDeleteTaskPayload';
  errors: Array<DesPayloadError>;
};

export type DesDeleteUserGroupInput = {
  /** The group node ID. */
  id: Scalars['ID'];
};

export type DesDeleteUserGroupPayload = {
  __typename?: 'DesDeleteUserGroupPayload';
  errors: Array<DesPayloadError>;
};

export type DesDeleteUserInput = {
  userId: Scalars['String'];
  workspaceUrl: Scalars['String'];
};

export type DesDeleteUserPayload = {
  __typename?: 'DesDeleteUserPayload';
  errors: Array<DesPayloadError>;
};

/** A design manages all of the schematic, PCB, and BOM content for a project. */
export type DesDesign = {
  __typename?: 'DesDesign';
  /** The list of published versions of the design grouped into pages. */
  releases?: Maybe<DesReleaseConnection>;
  /** The most recent version of the design. */
  workInProgress: DesWorkInProgress;
};


/** A design manages all of the schematic, PCB, and BOM content for a project. */
export type DesDesignReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DesReleaseFilterInput>;
};

export type DesDesignExchange = {
  __typename?: 'DesDesignExchange';
  downloadableFile: DesDownloadableFile;
  models3D: Array<DesModel3D>;
};

/** A design item is a specific instance of a part used in the design. */
export type DesDesignItem = Node & {
  __typename?: 'DesDesignItem';
  /** The planar boundary for this design item. */
  area?: Maybe<DesRectangle>;
  /** The additional information for this design item. */
  comment: Scalars['String'];
  /** The list of all comment threads related to this design item. */
  commentThreads?: Maybe<Array<DesCommentThread>>;
  /** The detailed component information for this design item. */
  component?: Maybe<DesComponent>;
  /** The summary of function or other performance details for this design item. */
  description: Scalars['String'];
  /** The unique label for this design item. */
  designator: Scalars['String'];
  footprintName: Scalars['String'];
  /** The node identifier for this project (used by `DesDesignItemById`). */
  id: Scalars['ID'];
  /** The layer(side) placement for this design item. */
  layer?: Maybe<DesLayer>;
  /** The list of connection targets for this design item. */
  pads: Array<DesPad>;
  /** The planar location for this design item. */
  position: DesPosition2D;
  /** The rotation in degrees. */
  rotation?: Maybe<Scalars['Decimal']>;
  /** The list of conductor segments for this design item. */
  tracks: Array<DesTrack>;
  /** The list of multiple layer connections for this design item. */
  vias: Array<DesVia>;
};


/** A design item is a specific instance of a part used in the design. */
export type DesDesignItemTracksArgs = {
  where?: InputMaybe<DesTrackFilterInput>;
};

/** A connection to a list of items. */
export type DesDesignItemConnection = {
  __typename?: 'DesDesignItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DesDesignItemEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DesDesignItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type DesDesignItemEdge = {
  __typename?: 'DesDesignItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DesDesignItem;
};

export type DesDownloadableFile = {
  __typename?: 'DesDownloadableFile';
  downloadUrl: Scalars['String'];
  fileName: Scalars['String'];
  relativePath: Scalars['String'];
};

export type DesFolder = {
  __typename?: 'DesFolder';
  description: Scalars['String'];
  name: Scalars['String'];
};

export type DesFootprint = {
  __typename?: 'DesFootprint';
  comment: Scalars['String'];
  dataDownloadUrl: Scalars['String'];
  description: Scalars['String'];
  folder?: Maybe<DesFolder>;
  guid: Scalars['String'];
  imageFullSizeUrl: Scalars['String'];
  imageThumbnailUrl: Scalars['String'];
  name: Scalars['String'];
  /** @deprecated Not implemented and may be removed. */
  pins: Array<DesPin>;
};

export type DesGerber = {
  __typename?: 'DesGerber';
  downloadUrl?: Maybe<Scalars['String']>;
  gerberFiles: Array<DesDownloadableFile>;
  packageName?: Maybe<Scalars['String']>;
};

export type DesGerberX2 = {
  __typename?: 'DesGerberX2';
  downloadUrl?: Maybe<Scalars['String']>;
  gerberX2Files: Array<DesDownloadableFile>;
  packageName?: Maybe<Scalars['String']>;
};

export type DesIpc2581 = {
  __typename?: 'DesIpc2581';
  downloadUrl?: Maybe<Scalars['String']>;
  ipc2581Files: Array<DesDownloadableFile>;
  packageName?: Maybe<Scalars['String']>;
};

export enum DesJobStatus {
  Done = 'DONE',
  Error = 'ERROR',
  Pending = 'PENDING',
  Processing = 'PROCESSING'
}

export type DesLaunchWorkflowInput = {
  /** The attachment variables. */
  attachments?: InputMaybe<Array<DesWorkflowAttachmentVariableInput>>;
  name?: InputMaybe<Scalars['String']>;
  /** The string variables. */
  variables: Array<DesWorkflowVariableInput>;
  workflowDefinitionId: Scalars['String'];
  workspaceUrl: Scalars['String'];
};

export type DesLaunchWorkflowPayload = {
  __typename?: 'DesLaunchWorkflowPayload';
  id: Scalars['String'];
  status: Scalars['Int'];
};

export type DesLayer = {
  __typename?: 'DesLayer';
  /** The copper area. */
  copperArea?: Maybe<DesArea>;
  /** The ratio of copper area to PCB area. */
  copperRatio?: Maybe<Scalars['Decimal']>;
  copperWeight?: Maybe<DesWeight>;
  dielectricConstant?: Maybe<Scalars['Decimal']>;
  layerProperties: Array<DesLayerProperty>;
  layerType: DesLayerType;
  material?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nets: Array<DesNet>;
  thickness?: Maybe<DesSize>;
};

export type DesLayerFilterInput = {
  and?: InputMaybe<Array<DesLayerFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesLayerFilterInput>>;
};

export type DesLayerProperty = {
  __typename?: 'DesLayerProperty';
  name: Scalars['String'];
  size?: Maybe<DesSize>;
  text: Scalars['String'];
};

export enum DesLayerType {
  Abstract = 'ABSTRACT',
  Adhesive = 'ADHESIVE',
  BikiniCoverlay = 'BIKINI_COVERLAY',
  Conductive = 'CONDUCTIVE',
  Core = 'CORE',
  Dielectric = 'DIELECTRIC',
  Foil = 'FOIL',
  Mechanical = 'MECHANICAL',
  Misc = 'MISC',
  NonConductive = 'NON_CONDUCTIVE',
  Overlay = 'OVERLAY',
  PasteMask = 'PASTE_MASK',
  PeLayer = 'PE_LAYER',
  Physical = 'PHYSICAL',
  Plane = 'PLANE',
  Plating = 'PLATING',
  Prepreg = 'PREPREG',
  Signal = 'SIGNAL',
  SolderMask = 'SOLDER_MASK',
  Stiffener = 'STIFFENER',
  SurfaceFinish = 'SURFACE_FINISH',
  Unknown = 'UNKNOWN'
}

export type DesLibrary = {
  __typename?: 'DesLibrary';
  /** Gets library components. */
  components?: Maybe<DesComponentConnection>;
  /** Gets library reuse blocks. */
  reuseBlocks?: Maybe<DesReuseBlockConnection>;
};


export type DesLibraryComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DesComponentFilterInput>;
};


export type DesLibraryReuseBlocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Revision naming scheme details obtained by `desLibrary/lifeCycleDefinitions`. */
export type DesLifeCycleDefinition = {
  __typename?: 'DesLifeCycleDefinition';
  lifeCycleDefinitionId: Scalars['String'];
  name: Scalars['String'];
};

export type DesLifeCycleState = {
  __typename?: 'DesLifeCycleState';
  name: Scalars['String'];
};

export type DesManufacturePackage = Node & {
  __typename?: 'DesManufacturePackage';
  downloadUrl: Scalars['String'];
  /** The node identifier for this project (used by `desManufacturePackageById`). */
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DesManufacturePackageCreationJob = {
  __typename?: 'DesManufacturePackageCreationJob';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  payload: DesManufacturePackageCreationJobPayload;
  status: DesJobStatus;
};

export type DesManufacturePackageCreationJobPayload = {
  __typename?: 'DesManufacturePackageCreationJobPayload';
  errors: Array<DesPayloadError>;
  packageId?: Maybe<Scalars['ID']>;
};

export type DesManufacturerPart = {
  __typename?: 'DesManufacturerPart';
  /** The manufacturer company name. */
  companyName: Scalars['String'];
  /** The Octopart ID. */
  octopartId?: Maybe<Scalars['String']>;
  /** The part number (MPN). */
  partNumber: Scalars['String'];
  priority: Scalars['Int'];
  supplierParts: Array<DesSupplierPart>;
};

/** A reference to a user in a comment. */
export type DesMention = {
  __typename?: 'DesMention';
  /** The mentioned user. */
  user: DesUser;
};

export type DesModel3D = {
  __typename?: 'DesModel3D';
  parasolidFile: DesDownloadableFile;
};

export type DesNcDrill = {
  __typename?: 'DesNcDrill';
  downloadUrl?: Maybe<Scalars['String']>;
  ncDrillFiles: Array<DesDownloadableFile>;
  packageName?: Maybe<Scalars['String']>;
};

export type DesNet = {
  __typename?: 'DesNet';
  cumulativeLength: DesSize;
  layers: Array<DesLayer>;
  name: Scalars['String'];
  pads: Array<DesPad>;
  tracks: Array<DesTrack>;
  vias: Array<DesVia>;
};


export type DesNetTracksArgs = {
  where?: InputMaybe<DesTrackFilterInput>;
};

export type DesOdb = {
  __typename?: 'DesOdb';
  downloadUrl?: Maybe<Scalars['String']>;
  odbFiles: Array<DesDownloadableFile>;
  packageName?: Maybe<Scalars['String']>;
};

export type DesOnCommentUpdatedInput = {
  token: Scalars['String'];
  workspaceUrl: Scalars['String'];
};

export type DesPad = {
  __typename?: 'DesPad';
  designator?: Maybe<Scalars['String']>;
  globalDesignator?: Maybe<Scalars['String']>;
  holeSize: DesSize;
  isPlated?: Maybe<Scalars['Boolean']>;
  layer?: Maybe<DesLayer>;
  net?: Maybe<DesNet>;
  padType: DesPadType;
  position: DesPosition2D;
  radius?: Maybe<Scalars['Int']>;
  rotation?: Maybe<Scalars['Decimal']>;
  shape?: Maybe<DesPrimitiveShape>;
  size: DesSize2D;
};

export enum DesPadType {
  Free = 'FREE',
  Smd = 'SMD'
}

export enum DesParameterType {
  Capacitance = 'CAPACITANCE',
  Charge = 'CHARGE',
  Conductance = 'CONDUCTANCE',
  Current = 'CURRENT',
  Decibels = 'DECIBELS',
  Frequency = 'FREQUENCY',
  Impedance = 'IMPEDANCE',
  Inductance = 'INDUCTANCE',
  Length = 'LENGTH',
  Mass = 'MASS',
  None = 'NONE',
  Percent = 'PERCENT',
  Power = 'POWER',
  Resistance = 'RESISTANCE',
  Temperature = 'TEMPERATURE',
  Text = 'TEXT',
  Time = 'TIME',
  Voltage = 'VOLTAGE'
}

export type DesPayloadError = {
  __typename?: 'DesPayloadError';
  message: Scalars['String'];
};

/** A PCB contains design details of the physical product. */
export type DesPcb = {
  __typename?: 'DesPcb';
  /** The total area contained by the PCB outline. */
  area: DesArea;
  /** The list of all comment threads related to this PCB. */
  commentThreads: Array<DesCommentThread>;
  /** The list of all part instances used in this PCB grouped into pages. */
  designItems?: Maybe<DesDesignItemConnection>;
  /** The reference identifier for this PCB. */
  documentId: Scalars['String'];
  /** The details of the layer structure of this PCB. */
  layerStack?: Maybe<DesStackup>;
  /** The list of all electrically connected regions in this PCB. */
  nets: Array<DesNet>;
  /** The location of the coordinate system origin. */
  origin: DesPosition2D;
  /** The outline of this PCB. */
  outline: DesPolygon;
  /** The list of all part connection targets in this PCB. */
  pads: Array<DesPad>;
  /** The dimensions of the PCB outline. */
  size: DesSize2D;
  /** The list of all conductor segments in this PCB. */
  tracks: Array<DesTrack>;
  /** The list of all multiple layer connections in this PCB. */
  vias: Array<DesVia>;
};


/** A PCB contains design details of the physical product. */
export type DesPcbDesignItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  designators?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A PCB contains design details of the physical product. */
export type DesPcbNetsArgs = {
  names?: InputMaybe<Array<Scalars['String']>>;
};


/** A PCB contains design details of the physical product. */
export type DesPcbTracksArgs = {
  where?: InputMaybe<DesTrackFilterInput>;
};

export type DesPcbAssembly = {
  __typename?: 'DesPcbAssembly';
  assemblyDrawings: DesAssemblyDrawings;
  downloadUrl: Scalars['String'];
  packageName: Scalars['String'];
  pickAndPlace: DesPickAndPlace;
};

export type DesPcbFabrication = {
  __typename?: 'DesPcbFabrication';
  downloadUrl: Scalars['String'];
  gerber: DesGerber;
  gerberX2: DesGerberX2;
  ipc2581: DesIpc2581;
  ncDrill: DesNcDrill;
  odb: DesOdb;
  packageName: Scalars['String'];
  testPoints: DesTestPoints;
};

export type DesPickAndPlace = {
  __typename?: 'DesPickAndPlace';
  downloadUrl?: Maybe<Scalars['String']>;
  packageName?: Maybe<Scalars['String']>;
  pickAndPlaceFiles: Array<DesDownloadableFile>;
};

export type DesPin = {
  __typename?: 'DesPin';
  description: Scalars['String'];
  designator: Scalars['String'];
  electricalType: DesPinElectricalType;
  name: Scalars['String'];
};

export enum DesPinElectricalType {
  HiZ = 'HI_Z',
  Input = 'INPUT',
  Io = 'IO',
  OpenCollector = 'OPEN_COLLECTOR',
  OpenEmitter = 'OPEN_EMITTER',
  Output = 'OUTPUT',
  Passive = 'PASSIVE',
  Power = 'POWER'
}

export type DesPolygon = {
  __typename?: 'DesPolygon';
  vertices: Array<DesPosition2D>;
};

export type DesPosition2D = {
  __typename?: 'DesPosition2D';
  x: Scalars['Int'];
  xMils: Scalars['Decimal'];
  xMm: Scalars['Decimal'];
  y: Scalars['Int'];
  yMils: Scalars['Decimal'];
  yMm: Scalars['Decimal'];
};

export type DesPosition2DInput = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export enum DesPrimitiveShape {
  Rectangle = 'RECTANGLE',
  Round = 'ROUND',
  RoundedRectangle = 'ROUNDED_RECTANGLE'
}

/** A project manages all development stages of the PCB/PCA product lifecycle. */
export type DesProject = Node & {
  __typename?: 'DesProject';
  /** The `DateTime` when this project was created. */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** The account information for who created this project. */
  createdBy?: Maybe<DesUser>;
  /** The summary of this project content or purpose. */
  description?: Maybe<Scalars['String']>;
  /** The detailed design information for this project. */
  design: DesDesign;
  /** The node identifier for this project (used by `desProjectById`). */
  id: Scalars['ID'];
  /** The assigned name for this project. */
  name?: Maybe<Scalars['String']>;
  /** The list of the parameters describing this project. */
  parameters: Array<DesProjectParameter>;
  /** The web address to download a preview image for this project. */
  previewUrl: Scalars['String'];
  /** The reference identifier for this project. */
  projectId: Scalars['String'];
  /** The list of project tasks. For a particular project consider using the more effective query `desProjectTasks`. */
  tasks?: Maybe<Array<DesTask>>;
  /** The `DateTime` when this project was last modified. */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** The account information for who last modified this project. */
  updatedBy?: Maybe<DesUser>;
  /** The Altium 365 web address. */
  url: Scalars['String'];
  /** The list of workflows associated with this project. */
  workflows?: Maybe<Array<DesWorkflow>>;
  /** The Altium 365 workspace URL. */
  workspaceUrl: Scalars['String'];
};


/** A project manages all development stages of the PCB/PCA product lifecycle. */
export type DesProjectParametersArgs = {
  names?: InputMaybe<Array<Scalars['String']>>;
};


/** A project manages all development stages of the PCB/PCA product lifecycle. */
export type DesProjectWorkflowsArgs = {
  isClosed?: Scalars['Boolean'];
  modifiedAfter?: InputMaybe<Scalars['DateTime']>;
  where?: InputMaybe<DesWorkflowFilterInput>;
};

/** A connection to a list of items. */
export type DesProjectConnection = {
  __typename?: 'DesProjectConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DesProjectEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DesProject>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type DesProjectEdge = {
  __typename?: 'DesProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DesProject;
};

/** A project manages all development stages of the PCB/PCA product lifecycle. */
export type DesProjectFilterInput = {
  and?: InputMaybe<Array<DesProjectFilterInput>>;
  /** The `DateTime` when this project was created. */
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  /** The summary of this project content or purpose. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** The assigned name for this project. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesProjectFilterInput>>;
  /** The reference identifier for this project. */
  projectId?: InputMaybe<StringOperationFilterInput>;
  /** The `DateTime` when this project was last modified. */
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  /** The Altium 365 web address. */
  url?: InputMaybe<StringOperationFilterInput>;
  /** The Altium 365 workspace URL. */
  workspaceUrl?: InputMaybe<StringOperationFilterInput>;
};

export type DesProjectIdPayload = {
  __typename?: 'DesProjectIdPayload';
  id: Scalars['ID'];
};

export type DesProjectParameter = {
  __typename?: 'DesProjectParameter';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type DesRectangle = {
  __typename?: 'DesRectangle';
  pos1: DesPosition2D;
  pos2: DesPosition2D;
};

export type DesRectangleInput = {
  pos1: DesPosition2DInput;
  pos2: DesPosition2DInput;
};

/** A release is a published version of a design with additional generated files for manufacturing. */
export type DesRelease = Node & {
  __typename?: 'DesRelease';
  /** The `DateTime` when this release was created. */
  createdAt: Scalars['DateTime'];
  /** The summary of this release content or purpose. */
  description: Scalars['String'];
  /** The node identifier for this release (used by `desReleaseById`). */
  id: Scalars['ID'];
  manufacturePackages: Array<DesManufacturePackage>;
  /** The reference identifier for this release. */
  releaseId: Scalars['String'];
  /** The list of variations contained in this release. */
  variants: Array<DesReleaseVariant>;
};


/** A release is a published version of a design with additional generated files for manufacturing. */
export type DesReleaseVariantsArgs = {
  where?: InputMaybe<DesReleaseVariantFilterInput>;
};

export type DesReleaseComponentFileInput = {
  /** Uploaded file ID. */
  fileId: Scalars['String'];
  /** Relative path of the source file. */
  relativePath: Scalars['String'];
};

export type DesReleaseComponentInput = {
  componentComment?: InputMaybe<Scalars['String']>;
  componentDescription?: InputMaybe<Scalars['String']>;
  componentItemName: Scalars['String'];
  componentLifeCycleDefinitionId?: InputMaybe<Scalars['String']>;
  componentReleaseFolder: Scalars['String'];
  componentRevisionNamingSchemeId?: InputMaybe<Scalars['String']>;
  footprintFiles: Array<DesReleaseComponentFileInput>;
  /** The footprint name. Use null to be generated. */
  footprintItemName?: InputMaybe<Scalars['String']>;
  footprintLifeCycleDefinitionId?: InputMaybe<Scalars['String']>;
  /** The footprint folder path, existing or to be created. */
  footprintReleaseFolder: Scalars['String'];
  footprintRevisionNamingSchemeId?: InputMaybe<Scalars['String']>;
  parameters: Array<DesRevisionParameterInput>;
  symbolFiles: Array<DesReleaseComponentFileInput>;
  /** The symbol name. Use null to be generated. */
  symbolItemName?: InputMaybe<Scalars['String']>;
  symbolLifeCycleDefinitionId?: InputMaybe<Scalars['String']>;
  /** The symbol folder path, existing or to be created. */
  symbolReleaseFolder: Scalars['String'];
  symbolRevisionNamingSchemeId?: InputMaybe<Scalars['String']>;
  workspaceUrl: Scalars['String'];
};

export type DesReleaseComponentPayload = {
  __typename?: 'DesReleaseComponentPayload';
  errors: Array<DesPayloadError>;
};

/** A connection to a list of items. */
export type DesReleaseConnection = {
  __typename?: 'DesReleaseConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DesReleaseEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DesRelease>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type DesReleaseEdge = {
  __typename?: 'DesReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DesRelease;
};

/** A release is a published version of a design with additional generated files for manufacturing. */
export type DesReleaseFilterInput = {
  and?: InputMaybe<Array<DesReleaseFilterInput>>;
  /** The `DateTime` when this release was created. */
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  /** The summary of this release content or purpose. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** The node identifier for this release (used by `desReleaseById`). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesReleaseFilterInput>>;
  /** The reference identifier for this release. */
  releaseId?: InputMaybe<StringOperationFilterInput>;
};

/** A variant contains a specific configuration of a base design. */
export type DesReleaseVariant = {
  __typename?: 'DesReleaseVariant';
  /** The Bill of Materials (BOM) for this published design variant. */
  bom?: Maybe<DesBom>;
  /** The descriptive label for this design variant. */
  name: Scalars['String'];
  /** The PCB document for this design variant. */
  pcb?: Maybe<DesPcb>;
  /** The data needed for assembly of this published design variant. */
  pcbAssembly?: Maybe<DesPcbAssembly>;
  /** The data needed for fabrication of this published design variant. */
  pcbFabrication?: Maybe<DesPcbFabrication>;
  /** The list of schematic documents for this design variant. */
  schematics: Array<DesSchematic>;
};

/** A variant contains a specific configuration of a base design. */
export type DesReleaseVariantFilterInput = {
  and?: InputMaybe<Array<DesReleaseVariantFilterInput>>;
  /** The descriptive label for this design variant. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesReleaseVariantFilterInput>>;
  /** The list of schematic documents for this design variant. */
  schematics?: InputMaybe<ListFilterInputTypeOfDesSchematicFilterInput>;
};

export type DesRemoveUsersFromGroupInput = {
  /** The group node ID. */
  id: Scalars['ID'];
  /** User IDs. */
  userIds: Array<Scalars['String']>;
};

export type DesRemoveUsersFromGroupPayload = {
  __typename?: 'DesRemoveUsersFromGroupPayload';
  errors: Array<DesPayloadError>;
};

export type DesReuseBlock = Node & {
  __typename?: 'DesReuseBlock';
  description: Scalars['String'];
  /** The node identifier for this reuse block (used by `desReuseBlockById`). */
  id: Scalars['ID'];
  latestRevision: DesReuseBlockRevision;
  name: Scalars['String'];
  revisions: Array<DesReuseBlockRevision>;
};

/** A connection to a list of items. */
export type DesReuseBlockConnection = {
  __typename?: 'DesReuseBlockConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DesReuseBlockEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DesReuseBlock>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type DesReuseBlockEdge = {
  __typename?: 'DesReuseBlockEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DesReuseBlock;
};

export type DesReuseBlockRevision = Node & {
  __typename?: 'DesReuseBlockRevision';
  comment: Scalars['String'];
  description: Scalars['String'];
  /** The node identifier for this reuse block (used by `desReuseBlockRevisionById`). */
  id: Scalars['ID'];
  name: Scalars['String'];
  pcbSnippet: DesDownloadableFile;
  schematicSnippet: DesDownloadableFile;
};

/** Revision details ID for later use or full details. */
export type DesRevision = {
  __typename?: 'DesRevision';
  /** The full revision details. */
  details: DesRevisionDetails;
  /** The revision details node ID for later use. */
  id: Scalars['ID'];
};

/** Revision details. */
export type DesRevisionDetails = {
  __typename?: 'DesRevisionDetails';
  childCount: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The node ID. */
  id: Scalars['ID'];
  lifeCycleState: DesLifeCycleState;
  parentCount: Scalars['Int'];
  references: Array<DesDownloadableFile>;
};

/** Revision details ID for later use or full details. */
export type DesRevisionFilterInput = {
  and?: InputMaybe<Array<DesRevisionFilterInput>>;
  /** The revision details node ID for later use. */
  id?: InputMaybe<IdOperationFilterInput>;
  or?: InputMaybe<Array<DesRevisionFilterInput>>;
};

/** Revision naming scheme details obtained by `desLibrary/revisionNamingSchemes`. */
export type DesRevisionNamingScheme = {
  __typename?: 'DesRevisionNamingScheme';
  name: Scalars['String'];
  revisionNamingSchemeId: Scalars['String'];
};

export type DesRevisionParameterInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** A schematic contains the design parts and logical connections. */
export type DesSchematic = {
  __typename?: 'DesSchematic';
  /** The list of all comment threads related to this schematic. */
  commentThreads: Array<DesCommentThread>;
  /** The list of all part instances used in this schematic grouped into pages. */
  designItems?: Maybe<DesDesignItemConnection>;
  /** The reference identifier for this schematic. */
  documentId: Scalars['String'];
  /** The list of all logical part connections in this schematic. */
  nets: Array<DesNet>;
  parentIds: Array<Scalars['String']>;
  units: Scalars['Int'];
};


/** A schematic contains the design parts and logical connections. */
export type DesSchematicDesignItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A schematic contains the design parts and logical connections. */
export type DesSchematicNetsArgs = {
  names?: InputMaybe<Array<Scalars['String']>>;
};

/** A schematic contains the design parts and logical connections. */
export type DesSchematicFilterInput = {
  and?: InputMaybe<Array<DesSchematicFilterInput>>;
  /** The reference identifier for this schematic. */
  documentId?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesSchematicFilterInput>>;
  parentIds?: InputMaybe<ListStringOperationFilterInput>;
  units?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type DesSharedWithMe = {
  __typename?: 'DesSharedWithMe';
  commentThreads: Array<DesCommentThread>;
  manufacturePackages: Array<DesManufacturePackage>;
  projects: Array<DesProject>;
};

export type DesSize = {
  __typename?: 'DesSize';
  x: Scalars['Decimal'];
  xMils: Scalars['Decimal'];
  xMm: Scalars['Decimal'];
};

export type DesSize2D = {
  __typename?: 'DesSize2D';
  x: Scalars['Int'];
  xMils: Scalars['Decimal'];
  xMm: Scalars['Decimal'];
  y: Scalars['Int'];
  yMils: Scalars['Decimal'];
  yMm: Scalars['Decimal'];
};

export type DesStack = {
  __typename?: 'DesStack';
  layers: Array<DesLayer>;
  name: Scalars['String'];
};

export type DesStackup = {
  __typename?: 'DesStackup';
  layerTypes: Array<DesLayerType>;
  roughnessFactorRF: Scalars['String'];
  roughnessFactorSR: Scalars['String'];
  roughnessType: Scalars['String'];
  stacks: Array<DesStack>;
  stackupType: Scalars['String'];
};

export type DesSupplierPart = {
  __typename?: 'DesSupplierPart';
  /** The supplier company name. */
  companyName: Scalars['String'];
  /** The part number (SKU). */
  partNumber: Scalars['String'];
  /** Available for library components. */
  prices?: Maybe<Array<DesSupplierPrice>>;
  /** Available for library components. */
  stocks?: Maybe<Array<DesSupplierStock>>;
};

export type DesSupplierPrice = {
  __typename?: 'DesSupplierPrice';
  breakQuantity: Scalars['Int'];
  currency: Scalars['String'];
  price: Scalars['Decimal'];
};

export type DesSupplierStock = {
  __typename?: 'DesSupplierStock';
  locationName: Scalars['String'];
  quantity: Scalars['Decimal'];
};

export type DesSymbol = {
  __typename?: 'DesSymbol';
  comment: Scalars['String'];
  dataDownloadUrl: Scalars['String'];
  description: Scalars['String'];
  folder?: Maybe<DesFolder>;
  guid: Scalars['String'];
  imageFullSizeUrl: Scalars['String'];
  imageThumbnailUrl: Scalars['String'];
  name: Scalars['String'];
  /** The list of pins. */
  pins: Array<DesPin>;
};

export type DesTask = Node & {
  __typename?: 'DesTask';
  /** The assigned user. */
  assignee: DesUser;
  /** The list of task comments. */
  comments: Array<DesComment>;
  /** The creation date. */
  createdAt: Scalars['DateTime'];
  /** The user who created the task. */
  createdBy: DesUser;
  /** The task description. */
  description: Scalars['String'];
  /** The node ID. */
  id: Scalars['ID'];
  /** The last modification date. */
  modifiedAt: Scalars['DateTime'];
  /** The user who modified the task. */
  modifiedBy: DesUser;
  /** The task name. */
  name: Scalars['String'];
  /** The task priority. */
  priority: DesTaskPriority;
  /** The task ID shown in Altium 365. */
  refId: Scalars['String'];
  /** The task status. */
  status: DesTaskStatus;
};

/** A connection to a list of items. */
export type DesTaskConnection = {
  __typename?: 'DesTaskConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DesTaskEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DesTask>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type DesTaskEdge = {
  __typename?: 'DesTaskEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DesTask;
};

export enum DesTaskPriority {
  High = 'HIGH',
  Highest = 'HIGHEST',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Undefined = 'UNDEFINED'
}

export enum DesTaskStatus {
  InProgress = 'IN_PROGRESS',
  Resolved = 'RESOLVED',
  ToDo = 'TO_DO',
  Undefined = 'UNDEFINED'
}

export type DesTeam = {
  __typename?: 'DesTeam';
  groups: Array<DesUserGroup>;
  users: Array<DesUser>;
};

export type DesTerminateWorkflowsError = {
  __typename?: 'DesTerminateWorkflowsError';
  id: Scalars['String'];
  message: Scalars['String'];
};

export type DesTerminateWorkflowsInput = {
  workflowIds: Array<Scalars['String']>;
  workspaceUrl: Scalars['String'];
};

export type DesTerminateWorkflowsPayload = {
  __typename?: 'DesTerminateWorkflowsPayload';
  errors: Array<DesTerminateWorkflowsError>;
};

export type DesTestPoints = {
  __typename?: 'DesTestPoints';
  downloadUrl?: Maybe<Scalars['String']>;
  packageName?: Maybe<Scalars['String']>;
  testPointFiles: Array<DesDownloadableFile>;
};

export type DesTrack = {
  __typename?: 'DesTrack';
  begin: DesPosition2D;
  end: DesPosition2D;
  layer?: Maybe<DesLayer>;
  net?: Maybe<DesNet>;
  width: DesSize;
};

export type DesTrackFilterInput = {
  and?: InputMaybe<Array<DesTrackFilterInput>>;
  layer?: InputMaybe<DesLayerFilterInput>;
  or?: InputMaybe<Array<DesTrackFilterInput>>;
};

export type DesUpdateCommentInput = {
  commentId: Scalars['String'];
  commentThreadId: Scalars['String'];
  entityId: Scalars['ID'];
  text: Scalars['String'];
};

export type DesUpdateCommentPayload = {
  __typename?: 'DesUpdateCommentPayload';
  errors: Array<DesPayloadError>;
};

export type DesUpdateComponentRevisionParametersInput = {
  componentId: Scalars['ID'];
  componentRevisionNamingSchemeId?: InputMaybe<Scalars['String']>;
  parameters: Array<DesRevisionParameterInput>;
  releaseNote?: InputMaybe<Scalars['String']>;
  /** Tells to replace all existing parameters. By default parameters are added to existing. */
  replaceExisting?: InputMaybe<Scalars['Boolean']>;
};

export type DesUpdateComponentRevisionParametersPayload = {
  __typename?: 'DesUpdateComponentRevisionParametersPayload';
  componentId: Scalars['ID'];
  errors: Array<DesPayloadError>;
};

export type DesUpdateReuseBlockInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type DesUpdateReuseBlockPayload = {
  __typename?: 'DesUpdateReuseBlockPayload';
  errors: Array<DesPayloadError>;
};

export type DesUpdateTaskCommentInput = {
  /** The comment ID. */
  commentId: Scalars['String'];
  /** The task node ID. */
  taskId: Scalars['ID'];
  /** New comment text. */
  text: Scalars['String'];
};

export type DesUpdateTaskCommentPayload = {
  __typename?: 'DesUpdateTaskCommentPayload';
  errors: Array<DesPayloadError>;
};

export type DesUpdateTaskInput = {
  /** New task description or null to keep old. */
  description?: InputMaybe<Scalars['String']>;
  /** New task name or null to keep old. */
  name?: InputMaybe<Scalars['String']>;
  /** New task priority or null to keep old. */
  priority?: InputMaybe<DesTaskPriority>;
  /** New task status or null to keep old. */
  status?: InputMaybe<DesTaskStatus>;
  /** The task node ID. */
  taskId: Scalars['ID'];
};

export type DesUpdateTaskPayload = {
  __typename?: 'DesUpdateTaskPayload';
  errors: Array<DesPayloadError>;
};

export type DesUpdateUserGroupInput = {
  /** The group node ID. */
  id: Scalars['ID'];
  /** The group name. */
  name: Scalars['String'];
};

export type DesUpdateUserGroupPayload = {
  __typename?: 'DesUpdateUserGroupPayload';
  errors: Array<DesPayloadError>;
};

export type DesUpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
  workspaceUrl: Scalars['String'];
};

export type DesUpdateUserPayload = {
  __typename?: 'DesUpdateUserPayload';
  errors: Array<DesPayloadError>;
};

export type DesUploadCollaborationSimulationInput = {
  comment: Scalars['String'];
  domain: Scalars['String'];
  files: Array<DesCollaborationSimulationFileInput>;
  projectId: Scalars['ID'];
  projectType: Scalars['String'];
  revision: Scalars['String'];
};

export type DesUploadCollaborationSimulationPayload = {
  __typename?: 'DesUploadCollaborationSimulationPayload';
  errors: Array<DesPayloadError>;
};

export type DesUploadProjectInput = {
  /** The project description. */
  description?: InputMaybe<Scalars['String']>;
  /** The uploaded zip file ID. */
  fileId: Scalars['String'];
  /** The project target folder path. */
  folderPath?: InputMaybe<Scalars['String']>;
  /** The project name. */
  name: Scalars['String'];
  /** The workspace URL. */
  workspaceUrl: Scalars['String'];
};

export type DesUploadProjectPayload = {
  __typename?: 'DesUploadProjectPayload';
  errors: Array<DesPayloadError>;
  /** The project ID. */
  projectId: Scalars['ID'];
};

/** User details with the identifier and nullable extra fields. */
export type DesUser = {
  __typename?: 'DesUser';
  /** Null if the user no longer exists. */
  email?: Maybe<Scalars['String']>;
  /** Null if the user no longer exists. */
  firstName?: Maybe<Scalars['String']>;
  /** Null if the user no longer exists. */
  groups?: Maybe<Array<DesUserGroup>>;
  /** Null if the user no longer exists. */
  lastName?: Maybe<Scalars['String']>;
  /** Null if the user no longer exists. */
  pictureUrl?: Maybe<Scalars['String']>;
  /** The internal user ID. */
  userId: Scalars['String'];
  /** Null if the user no longer exists. */
  userName?: Maybe<Scalars['String']>;
};


/** User details with the identifier and nullable extra fields. */
export type DesUserPictureUrlArgs = {
  size?: InputMaybe<DesUserPictureSize>;
};

/** A user group information. */
export type DesUserGroup = Node & {
  __typename?: 'DesUserGroup';
  /** The node ID. */
  id: Scalars['ID'];
  /** The group name. */
  name: Scalars['String'];
};

export enum DesUserPictureSize {
  Original = 'ORIGINAL',
  Size48X48 = 'SIZE48X48',
  Size70X70 = 'SIZE70X70',
  Size128X128 = 'SIZE128X128'
}

export type DesVia = {
  __typename?: 'DesVia';
  beginLayer?: Maybe<DesLayer>;
  endLayer?: Maybe<DesLayer>;
  holeDiameter: DesSize;
  layer?: Maybe<DesLayer>;
  name?: Maybe<Scalars['String']>;
  net?: Maybe<DesNet>;
  padDiameter: DesSize;
  position: DesPosition2D;
  shape?: Maybe<DesPrimitiveShape>;
};

export type DesWeight = {
  __typename?: 'DesWeight';
  gram: Scalars['Decimal'];
  ounce: Scalars['Decimal'];
  x: Scalars['Decimal'];
};

/** A variant contains a specific configuration of a base design. */
export type DesWipVariant = {
  __typename?: 'DesWipVariant';
  /** The Bill of Materials (BOM) for this design variant. */
  bom?: Maybe<DesBom>;
  designExchange?: Maybe<DesDesignExchange>;
  /** The descriptive label for this design variant. */
  name: Scalars['String'];
  /** The PCB document for this design variant. */
  pcb?: Maybe<DesPcb>;
  /** The list of schematic documents for this design variant. */
  schematics: Array<DesSchematic>;
};

/** A variant contains a specific configuration of a base design. */
export type DesWipVariantFilterInput = {
  and?: InputMaybe<Array<DesWipVariantFilterInput>>;
  /** The descriptive label for this design variant. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesWipVariantFilterInput>>;
  /** The list of schematic documents for this design variant. */
  schematics?: InputMaybe<ListFilterInputTypeOfDesSchematicFilterInput>;
};

/** The most recent version of a design. */
export type DesWorkInProgress = {
  __typename?: 'DesWorkInProgress';
  /** The list of variations contained in this design. */
  variants: Array<DesWipVariant>;
};


/** The most recent version of a design. */
export type DesWorkInProgressVariantsArgs = {
  where?: InputMaybe<DesWipVariantFilterInput>;
};

/** A workflow manages the execution of a logical sequence of tasks. */
export type DesWorkflow = {
  __typename?: 'DesWorkflow';
  /** The account information for the owner of any action or response needed for this workflow. */
  assignee: Scalars['String'];
  /** The `DateTime` for the creation of this workflow. */
  createdAt: Scalars['DateTime'];
  /** The account information for who created this workflow. */
  createdBy: Scalars['String'];
  /** The `DateTime` for the completion of this workflow. */
  endedAt?: Maybe<Scalars['DateTime']>;
  /** The `DateTime` for the most recent changes for this workflow. */
  modifiedAt: Scalars['DateTime'];
  /** The label for this workflow. */
  name: Scalars['String'];
  /** The reference identifier for definition of this workflow. */
  processDefinitionId: Scalars['String'];
  /** The label for the definition of this workflow. */
  processDefinitionName: Scalars['String'];
  /** The name of the active task(s) for this workflow. */
  state?: Maybe<Scalars['String']>;
  /** The current condition of this workflow. */
  status: Scalars['String'];
  /** The list of variables defined for this workflow. */
  variables: Array<DesWorkflowVariable>;
  /** The reference identifier for this workflow. */
  workflowId: Scalars['String'];
};


/** A workflow manages the execution of a logical sequence of tasks. */
export type DesWorkflowVariablesArgs = {
  names?: InputMaybe<Array<Scalars['String']>>;
};

export type DesWorkflowAttachmentVariableInput = {
  /** Uploaded file references. */
  files: Array<Scalars['String']>;
  /** The variable name. */
  name: Scalars['String'];
};

/** A workflow definition contains a logical sequence of tasks. */
export type DesWorkflowDefinition = {
  __typename?: 'DesWorkflowDefinition';
  /** The `DateTime` for the creation of this workflow definition. */
  createdAt: Scalars['DateTime'];
  /** The account information for who created this workflow definition. */
  createdBy: Scalars['String'];
  /** The label for this workflow definition. */
  name: Scalars['String'];
  /** The list of variables need to launch this workflow definition. */
  variables: Array<DesWorkflowVariable>;
  /** The reference identifier for this workflow definition. */
  workflowDefinitionId: Scalars['String'];
};

/** A workflow definition contains a logical sequence of tasks. */
export type DesWorkflowDefinitionFilterInput = {
  and?: InputMaybe<Array<DesWorkflowDefinitionFilterInput>>;
  /** The `DateTime` for the creation of this workflow definition. */
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  /** The account information for who created this workflow definition. */
  createdBy?: InputMaybe<StringOperationFilterInput>;
  /** The label for this workflow definition. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesWorkflowDefinitionFilterInput>>;
  /** The reference identifier for this workflow definition. */
  workflowDefinitionId?: InputMaybe<StringOperationFilterInput>;
};

/** A workflow manages the execution of a logical sequence of tasks. */
export type DesWorkflowFilterInput = {
  and?: InputMaybe<Array<DesWorkflowFilterInput>>;
  /** The account information for the owner of any action or response needed for this workflow. */
  assignee?: InputMaybe<StringOperationFilterInput>;
  /** The `DateTime` for the creation of this workflow. */
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  /** The account information for who created this workflow. */
  createdBy?: InputMaybe<StringOperationFilterInput>;
  /** The `DateTime` for the completion of this workflow. */
  endedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  /** The label for this workflow. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesWorkflowFilterInput>>;
  /** The reference identifier for definition of this workflow. */
  processDefinitionId?: InputMaybe<StringOperationFilterInput>;
  /** The label for the definition of this workflow. */
  processDefinitionName?: InputMaybe<StringOperationFilterInput>;
  /** The name of the active task(s) for this workflow. */
  state?: InputMaybe<StringOperationFilterInput>;
  /** The current condition of this workflow. */
  status?: InputMaybe<StringOperationFilterInput>;
  /** The reference identifier for this workflow. */
  workflowId?: InputMaybe<StringOperationFilterInput>;
};

export type DesWorkflowVariable = {
  __typename?: 'DesWorkflowVariable';
  constraint?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  value: Scalars['String'];
  valueType?: Maybe<Scalars['String']>;
};

export type DesWorkflowVariableInput = {
  constraint?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  value: Scalars['String'];
  valueType?: InputMaybe<Scalars['String']>;
};

/** A workspace provides a flexible and secure method for managing design, manufacturing and supply content. */
export type DesWorkspace = Node & {
  __typename?: 'DesWorkspace';
  /** The summary of this workspace content or purpose. */
  description?: Maybe<Scalars['String']>;
  /** The node identifier for the workspace (used by `DesWorkspaceById`). */
  id: Scalars['ID'];
  /** Tells if the workspace is the current user default. */
  isDefault: Scalars['Boolean'];
  /** The resource managing components for this workspace. */
  library: DesLibrary;
  /** The location of this workspace. */
  location: DesWorkspaceLocation;
  /** The descriptive label for this workspace. */
  name: Scalars['String'];
  /** The list of projects managed in this workspace. */
  projects: Array<DesProject>;
  /** The list of workspace tasks. For a particular workspace consider using the more effective query `desWorkspaceTasks`. */
  tasks?: Maybe<Array<DesTask>>;
  /** The list of members authorized for this workspace. */
  team: DesTeam;
  /** The web address of this workspace. */
  url: Scalars['String'];
  /** The list of workflow definitions in this workspace. */
  workflowDefinitions?: Maybe<Array<DesWorkflowDefinition>>;
  /** The list of workflows in this workspace. */
  workflows?: Maybe<Array<DesWorkflow>>;
};


/** A workspace provides a flexible and secure method for managing design, manufacturing and supply content. */
export type DesWorkspaceProjectsArgs = {
  where?: InputMaybe<DesProjectFilterInput>;
};


/** A workspace provides a flexible and secure method for managing design, manufacturing and supply content. */
export type DesWorkspaceWorkflowDefinitionsArgs = {
  where?: InputMaybe<DesWorkflowDefinitionFilterInput>;
};


/** A workspace provides a flexible and secure method for managing design, manufacturing and supply content. */
export type DesWorkspaceWorkflowsArgs = {
  where?: InputMaybe<DesWorkflowFilterInput>;
};

/** A workspace provides a flexible and secure method for managing design, manufacturing and supply content. */
export type DesWorkspaceFilterInput = {
  and?: InputMaybe<Array<DesWorkspaceFilterInput>>;
  /** The summary of this workspace content or purpose. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** The node identifier for the workspace (used by `DesWorkspaceById`). */
  id?: InputMaybe<StringOperationFilterInput>;
  /** Tells if the workspace is the current user default. */
  isDefault?: InputMaybe<BooleanOperationFilterInput>;
  /** The descriptive label for this workspace. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DesWorkspaceFilterInput>>;
  /** The web address of this workspace. */
  url?: InputMaybe<StringOperationFilterInput>;
};

export type DesWorkspaceLocation = {
  __typename?: 'DesWorkspaceLocation';
  /** The preferred Nexar API URL to use for this location. */
  apiServiceUrl: Scalars['String'];
  /** The preferred files service URL to use for this location. */
  filesServiceUrl: Scalars['String'];
  /** The name of the location. */
  name: Scalars['String'];
};

export type IdOperationFilterInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ListFilterInputTypeOfDesSchematicFilterInput = {
  all?: InputMaybe<DesSchematicFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<DesSchematicFilterInput>;
  some?: InputMaybe<DesSchematicFilterInput>;
};

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StringOperationFilterInput>;
  some?: InputMaybe<StringOperationFilterInput>;
};

export type ManAabb = {
  __typename?: 'ManAABB';
  area?: Maybe<ManArea>;
  bottomRight?: Maybe<ManPoint2D>;
  topLeft?: Maybe<ManPoint2D>;
};

export type ManAabbInput = {
  bottomRight?: InputMaybe<ManPoint2DInput>;
  topLeft?: InputMaybe<ManPoint2DInput>;
};

export enum ManAccess {
  AllowMpn = 'ALLOW_MPN',
  IsCreator = 'IS_CREATOR',
  IsEms = 'IS_EMS'
}

export type ManAngle = {
  __typename?: 'ManAngle';
  degrees?: Maybe<Scalars['Float']>;
  native?: Maybe<Scalars['Int']>;
  radians?: Maybe<Scalars['Float']>;
};

export type ManArea = {
  __typename?: 'ManArea';
  inSq?: Maybe<Scalars['Float']>;
  mil2?: Maybe<Scalars['Float']>;
  mm2?: Maybe<Scalars['Float']>;
  native?: Maybe<Scalars['Int']>;
};

export type ManAssembly = {
  __typename?: 'ManAssembly';
  boardMeta?: Maybe<ManBoardMeta>;
  bomSelection?: Maybe<Scalars['ID']>;
  commitId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  package?: Maybe<ManPackageJob>;
  projectId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['String']>;
};

export type ManBoardDetails = {
  __typename?: 'ManBoardDetails';
  aabb?: Maybe<ManAabb>;
  path?: Maybe<Array<Maybe<ManPathSegment>>>;
  polygon?: Maybe<Array<Maybe<ManPoint2D>>>;
};


export type ManBoardDetailsPolygonArgs = {
  quant: Scalars['Int'];
};

export type ManBoardMeta = {
  __typename?: 'ManBoardMeta';
  boardDetails?: Maybe<ManBoardDetails>;
  bomIssues: ManBomIssues;
  consignmentCount: Scalars['Int'];
  id?: Maybe<Scalars['ID']>;
  minAnnularRing?: Maybe<ManLength>;
  minClearance?: Maybe<ManLength>;
  parts?: Maybe<Array<Maybe<ManPart>>>;
  placementStats?: Maybe<ManPlacementInfo>;
  projectId?: Maybe<Scalars['String']>;
  stackUp?: Maybe<Array<Maybe<ManLayer>>>;
};

export type ManBoardMetaInput = {
  boardOutline?: InputMaybe<Array<InputMaybe<ManPathSegmentInput>>>;
  minAnnularRing?: InputMaybe<Scalars['Int']>;
  minClearance?: InputMaybe<Scalars['Int']>;
  parts?: InputMaybe<Array<InputMaybe<ManPartInput>>>;
  projectId?: InputMaybe<Scalars['String']>;
  stackUp?: InputMaybe<Array<InputMaybe<ManLayerInput>>>;
};

export type ManBomIssues = {
  __typename?: 'ManBomIssues';
  issueCount: Scalars['Int'];
  warningCount: Scalars['Int'];
};

export type ManBomResolution = {
  __typename?: 'ManBomResolution';
  parts: Array<ManPart>;
};

export type ManConsignmentDocs = {
  __typename?: 'ManConsignmentDocs';
  html: Scalars['String'];
  pdf: Scalars['String'];
};

export type ManCreateAssemblyResponse = {
  __typename?: 'ManCreateAssemblyResponse';
  assembly?: Maybe<ManAssembly>;
};

export type ManCreateOrderResponse = {
  __typename?: 'ManCreateOrderResponse';
  order?: Maybe<ManOrder>;
};

export enum ManCurrency {
  Usd = 'USD'
}

export type ManFeatures = {
  __typename?: 'ManFeatures';
  availablePaymentOptions: Array<ManPaymentMethod>;
};

export type ManLayer = {
  __typename?: 'ManLayer';
  copperWeight?: Maybe<Scalars['Float']>;
  maskColour?: Maybe<ManSolderMaskColour>;
  material?: Maybe<Scalars['String']>;
  overlayColour?: Maybe<ManSilkScreenColour>;
  process?: Maybe<Scalars['String']>;
  thickness?: Maybe<ManLength>;
  type?: Maybe<ManLayerType>;
};

export type ManLayerInput = {
  copperWeight?: InputMaybe<Scalars['Float']>;
  maskColour?: InputMaybe<ManSolderMaskColour>;
  material?: InputMaybe<Scalars['String']>;
  overlayColour?: InputMaybe<ManSilkScreenColour>;
  process?: InputMaybe<Scalars['String']>;
  thickness?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<ManLayerType>;
};

export enum ManLayerType {
  Core = 'CORE',
  Coverlay = 'COVERLAY',
  Overlay = 'OVERLAY',
  Plane = 'PLANE',
  PrePreg = 'PRE_PREG',
  Signal = 'SIGNAL',
  SolderMask = 'SOLDER_MASK',
  SurfaceFinish = 'SURFACE_FINISH'
}

export type ManLength = {
  __typename?: 'ManLength';
  inch?: Maybe<Scalars['Float']>;
  mil?: Maybe<Scalars['Float']>;
  mm?: Maybe<Scalars['Float']>;
  /** native units of 1/10000 of a mil */
  native?: Maybe<Scalars['Int']>;
};

export enum ManMountingType {
  SurfaceMount = 'SURFACE_MOUNT',
  ThroughHole = 'THROUGH_HOLE'
}

export type ManOffer = {
  __typename?: 'ManOffer';
  minQty?: Maybe<Scalars['Int']>;
  price?: Maybe<ManPrice>;
};

export type ManOfferInput = {
  minQty?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<ManPriceInput>;
};

export type ManOrder = {
  __typename?: 'ManOrder';
  assembly?: Maybe<ManAssembly>;
  boardName?: Maybe<Scalars['String']>;
  boardPreview?: Maybe<Scalars['String']>;
  checkoutURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<ManUser>;
  events?: Maybe<Array<Maybe<ManOrderEvent>>>;
  id?: Maybe<Scalars['ID']>;
  rapidQuote?: Maybe<ManQuoteInfo>;
  reference?: Maybe<Scalars['String']>;
  shipDate?: Maybe<Scalars['DateTime']>;
  shipping?: Maybe<ManShippingDetails>;
  status?: Maybe<ManOrderStatus>;
  stripeSecret?: Maybe<Scalars['ID']>;
};

export type ManOrderAcceptedEvent = ManOrderEvent & {
  __typename?: 'ManOrderAcceptedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  paymentSelection: ManPaymentSelection;
  timestamp: Scalars['Int'];
};

export type ManOrderBatchedEvent = ManOrderEvent & {
  __typename?: 'ManOrderBatchedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderBatchedInput = {
  orderId: Scalars['ID'];
};

export type ManOrderCancelEvent = ManOrderEvent & {
  __typename?: 'ManOrderCancelEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderConsignmentDetailsEvent = ManOrderEvent & {
  __typename?: 'ManOrderConsignmentDetailsEvent';
  consignmentId: Scalars['ID'];
  documents: ManConsignmentDocs;
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  parts: Array<ManPartQuantity>;
  receiveBy: Scalars['DateTime'];
  shipping: ManShippingDetails;
  timestamp: Scalars['Int'];
};

export type ManOrderConsignmentDetailsInput = {
  consignmentId: Scalars['ID'];
  orderId: Scalars['ID'];
  partQuantities: Array<ManPartQuantityInput>;
  receiveBy: Scalars['DateTime'];
  shipping: ManShippingDetailsInput;
};

export type ManOrderCreatedEvent = ManOrderEvent & {
  __typename?: 'ManOrderCreatedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderEmsAcceptInput = {
  emsReference?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
};

export type ManOrderEmsAcceptedEvent = ManOrderEvent & {
  __typename?: 'ManOrderEmsAcceptedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderEvent = {
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export enum ManOrderEventType {
  Accepted = 'ACCEPTED',
  Batched = 'BATCHED',
  Cancel = 'CANCEL',
  ConsignmentDetails = 'CONSIGNMENT_DETAILS',
  Created = 'CREATED',
  EmsAccepted = 'EMS_ACCEPTED',
  Paid = 'PAID',
  PartsOrdered = 'PARTS_ORDERED',
  PartsReceived = 'PARTS_RECEIVED',
  PcbsOrdered = 'PCBS_ORDERED',
  PcbsReceived = 'PCBS_RECEIVED',
  ProcessStart = 'PROCESS_START',
  Received = 'RECEIVED',
  Reviewed = 'REVIEWED',
  Shipped = 'SHIPPED',
  TimeEstimation = 'TIME_ESTIMATION'
}

export type ManOrderPaidEvent = ManOrderEvent & {
  __typename?: 'ManOrderPaidEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderPartsOrderedEvent = ManOrderEvent & {
  __typename?: 'ManOrderPartsOrderedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderPartsOrderedInput = {
  orderId: Scalars['ID'];
};

export type ManOrderPartsReceivedEvent = ManOrderEvent & {
  __typename?: 'ManOrderPartsReceivedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderPartsReceivedInput = {
  orderId: Scalars['ID'];
};

export type ManOrderPcbsOrderedEvent = ManOrderEvent & {
  __typename?: 'ManOrderPcbsOrderedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderPcbsOrderedInput = {
  orderId: Scalars['ID'];
};

export type ManOrderPcbsReceivedEvent = ManOrderEvent & {
  __typename?: 'ManOrderPcbsReceivedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderPcbsReceivedInput = {
  orderId: Scalars['ID'];
};

export type ManOrderProcessStartEvent = ManOrderEvent & {
  __typename?: 'ManOrderProcessStartEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderProcessStartInput = {
  orderId: Scalars['ID'];
};

export type ManOrderReceivedEvent = ManOrderEvent & {
  __typename?: 'ManOrderReceivedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderReviewInput = {
  orderId: Scalars['ID'];
};

export type ManOrderReviewedEvent = ManOrderEvent & {
  __typename?: 'ManOrderReviewedEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderShipEstimateEvent = ManOrderEvent & {
  __typename?: 'ManOrderShipEstimateEvent';
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
};

export type ManOrderShipEstimateInput = {
  estimateDate: Scalars['DateTime'];
  orderId: Scalars['ID'];
};

export type ManOrderShippedEvent = ManOrderEvent & {
  __typename?: 'ManOrderShippedEvent';
  carrier: ManShippingCarrier;
  eventType: ManOrderEventType;
  id: Scalars['ID'];
  order: ManOrder;
  timestamp: Scalars['Int'];
  trackingLink: Scalars['String'];
  trackingNumber: Scalars['String'];
};

export type ManOrderShippedInput = {
  carrier?: InputMaybe<ManShippingCarrier>;
  orderId: Scalars['ID'];
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export enum ManOrderStatus {
  Cancelled = 'CANCELLED',
  Complete = 'COMPLETE',
  Manufacturing = 'MANUFACTURING',
  PaymentProcessing = 'PAYMENT_PROCESSING',
  Placed = 'PLACED',
  Processing = 'PROCESSING',
  Quoting = 'QUOTING',
  Shipping = 'SHIPPING'
}

export type ManPackageJob = {
  __typename?: 'ManPackageJob';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
};

export type ManPart = {
  __typename?: 'ManPart';
  comment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  issues: Array<ManPartIssue>;
  name?: Maybe<Scalars['String']>;
  partChoices?: Maybe<Array<Maybe<ManPartChoice>>>;
  pinCount?: Maybe<Scalars['Int']>;
  placementCount?: Maybe<Scalars['Int']>;
  placements?: Maybe<Array<Maybe<ManPlacement>>>;
  selectedChoice?: Maybe<ManPartChoice>;
  sourcing: ManSourcing;
  status?: Maybe<ManPartStatus>;
  type?: Maybe<ManMountingType>;
};

export type ManPartChoice = {
  __typename?: 'ManPartChoice';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lifecycle?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  mpn?: Maybe<Scalars['String']>;
  octopartId?: Maybe<Scalars['String']>;
  octopartUrl?: Maybe<Scalars['String']>;
  suppliers?: Maybe<Array<Maybe<ManPurchaseOption>>>;
};

export type ManPartChoiceInput = {
  manufacturer?: InputMaybe<Scalars['String']>;
  mpn?: InputMaybe<Scalars['String']>;
  octopartId?: InputMaybe<Scalars['String']>;
  suppliers?: InputMaybe<Array<InputMaybe<ManPurchaseOptionInput>>>;
};

export type ManPartInput = {
  componentId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  partChoices?: InputMaybe<Array<InputMaybe<ManPartChoiceInput>>>;
  pinCount?: InputMaybe<Scalars['Int']>;
  placements?: InputMaybe<Array<InputMaybe<ManPlacementInput>>>;
  type?: InputMaybe<ManMountingType>;
};

export enum ManPartIssue {
  BadLifecycle = 'BAD_LIFECYCLE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotFound = 'NOT_FOUND',
  NoSelection = 'NO_SELECTION',
  StockLow = 'STOCK_LOW',
  Unavailable = 'UNAVAILABLE'
}

export type ManPartQuantity = {
  __typename?: 'ManPartQuantity';
  linkedPart?: Maybe<ManPartChoice>;
  placements: Array<ManPlacement>;
  quantity: Scalars['Int'];
  reference: Scalars['String'];
};

export type ManPartQuantityInput = {
  amount: Scalars['Int'];
  id: Scalars['ID'];
};

export type ManPartSelectionInput = {
  part: Scalars['ID'];
  selection: Scalars['ID'];
  sourcing: ManSourcing;
};

export enum ManPartStatus {
  Good = 'GOOD',
  Issue = 'ISSUE',
  Warn = 'WARN'
}

export type ManPathSegment = {
  __typename?: 'ManPathSegment';
  endAngle?: Maybe<ManAngle>;
  radius?: Maybe<ManLength>;
  startAngle?: Maybe<ManAngle>;
  type?: Maybe<ManPathType>;
  vertex?: Maybe<ManPoint2D>;
};

export type ManPathSegmentInput = {
  /** end point of arc in billionth of a rotation (range from 0 to 999999999) */
  endAngle?: InputMaybe<Scalars['Int']>;
  /** radius of the circle if an arc */
  radius?: InputMaybe<Scalars['Int']>;
  /** start point of arc in billionth of a rotation (range from 0 to 999999999) */
  startAngle?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<ManPathType>;
  /** Either center of a circle for the arc, or the vertex location */
  vertex?: InputMaybe<ManPoint2DInput>;
};

export enum ManPathType {
  Arc = 'ARC',
  Vertex = 'VERTEX'
}

export enum ManPaymentMethod {
  CreditCard = 'CREDIT_CARD',
  DirectApproval = 'DIRECT_APPROVAL'
}

export type ManPaymentSelection = {
  __typename?: 'ManPaymentSelection';
  method: ManPaymentMethod;
  purchaseOrderReference?: Maybe<Scalars['String']>;
};

export type ManPaymentSelectionInput = {
  method: ManPaymentMethod;
  purchaseOrderReference?: InputMaybe<Scalars['String']>;
};

export type ManPlacement = {
  __typename?: 'ManPlacement';
  aabb?: Maybe<ManAabb>;
  location?: Maybe<ManPoint2D>;
  refdes?: Maybe<Scalars['String']>;
  side?: Maybe<ManSide>;
  size?: Maybe<ManPoint2D>;
};

export type ManPlacementInfo = {
  __typename?: 'ManPlacementInfo';
  bomLines?: Maybe<Scalars['Int']>;
  botPlacements?: Maybe<Scalars['Int']>;
  dualSided?: Maybe<Scalars['Boolean']>;
  smtPlacements?: Maybe<Scalars['Int']>;
  thPlacements?: Maybe<Scalars['Int']>;
  topPlacements?: Maybe<Scalars['Int']>;
  totalPlacements?: Maybe<Scalars['Int']>;
};

export type ManPlacementInput = {
  /** aabb of the part */
  aabb?: InputMaybe<ManAabbInput>;
  /** Location of the part */
  location?: InputMaybe<ManPoint2DInput>;
  /** schematic refdes */
  refdes?: InputMaybe<Scalars['String']>;
  /** Side of the board */
  side?: InputMaybe<ManSide>;
};

export type ManPoint2D = {
  __typename?: 'ManPoint2D';
  x?: Maybe<ManLength>;
  y?: Maybe<ManLength>;
};

export type ManPoint2DInput = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type ManPrice = {
  __typename?: 'ManPrice';
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<ManCurrency>;
};

export type ManPriceInput = {
  amount?: InputMaybe<Scalars['Decimal']>;
};

export type ManProjectFeatureInput = {
  projectId: Scalars['ID'];
};

export type ManPurchaseOption = {
  __typename?: 'ManPurchaseOption';
  inventory?: Maybe<Scalars['Int']>;
  offers?: Maybe<Array<Maybe<ManOffer>>>;
  sku?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
};

export type ManPurchaseOptionInput = {
  inventory?: InputMaybe<Scalars['Int']>;
  offers?: InputMaybe<Array<InputMaybe<ManOfferInput>>>;
  supplier?: InputMaybe<Scalars['String']>;
};

export type ManQuote = {
  __typename?: 'ManQuote';
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<ManQuoteItem>>>;
  leadtime?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Decimal']>;
  type?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
  violations?: Maybe<Array<Maybe<ManViolation>>>;
};

export enum ManQuoteCategory {
  Assembly = 'ASSEMBLY',
  Bom = 'BOM',
  Fabrication = 'FABRICATION',
  Nre = 'NRE',
  Shipping = 'SHIPPING'
}

export type ManQuoteInfo = {
  __typename?: 'ManQuoteInfo';
  quoteRequest?: Maybe<ManRapidQuoteRequest>;
  response?: Maybe<ManRapidQuoteResponse>;
  selectedQuote?: Maybe<ManQuote>;
};

export type ManQuoteInput = {
  id: Scalars['ID'];
  /** the quote line items */
  items?: InputMaybe<Array<InputMaybe<ManQuoteInputItem>>>;
  /** leadtime in business days */
  leadtime?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  /** any parameter violation which invalidate the quote */
  violations?: InputMaybe<Array<InputMaybe<ManViolationInput>>>;
};

export type ManQuoteInputItem = {
  amount?: InputMaybe<Scalars['Decimal']>;
  category?: InputMaybe<ManQuoteCategory>;
  ident?: InputMaybe<Scalars['String']>;
};

export type ManQuoteItem = {
  __typename?: 'ManQuoteItem';
  amount?: Maybe<Scalars['Decimal']>;
  category?: Maybe<ManQuoteCategory>;
  ident?: Maybe<Scalars['String']>;
};

export type ManRapidQuoteRequest = {
  __typename?: 'ManRapidQuoteRequest';
  bomResolutionUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  meta?: Maybe<ManBoardMeta>;
  qty?: Maybe<Scalars['Int']>;
  requestorId?: Maybe<Scalars['ID']>;
  shipping?: Maybe<ManShippingDetails>;
};

export type ManRapidQuoteResponse = {
  __typename?: 'ManRapidQuoteResponse';
  id?: Maybe<Scalars['ID']>;
  quotes?: Maybe<Array<Maybe<ManQuote>>>;
  request?: Maybe<ManRapidQuoteRequest>;
};


export type ManRapidQuoteResponseQuotesArgs = {
  wait?: InputMaybe<Scalars['Int']>;
};

export enum ManShippingCarrier {
  Ups = 'UPS',
  Usps = 'USPS'
}

export type ManShippingDetails = {
  __typename?: 'ManShippingDetails';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  method?: Maybe<ManShippingMethod>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ManShippingDetailsInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<ManShippingMethodInput>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postal?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type ManShippingMethod = {
  __typename?: 'ManShippingMethod';
  carrier?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
};

export type ManShippingMethodInput = {
  carrier?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
};

export enum ManSide {
  Bottom = 'BOTTOM',
  Top = 'TOP'
}

export enum ManSilkScreenColour {
  Black = 'BLACK',
  Blue = 'BLUE',
  Green = 'GREEN',
  Red = 'RED',
  White = 'WHITE',
  Yellow = 'YELLOW'
}

export enum ManSolderMaskColour {
  Black = 'BLACK',
  Blue = 'BLUE',
  DarkBrown = 'DARK_BROWN',
  Green = 'GREEN',
  LightGreen = 'LIGHT_GREEN',
  MatteBlack = 'MATTE_BLACK',
  MatteGreen = 'MATTE_GREEN',
  Red = 'RED',
  Transparent = 'TRANSPARENT',
  White = 'WHITE',
  Yellow = 'YELLOW'
}

export enum ManSourcing {
  Altimade = 'ALTIMADE',
  Consign = 'CONSIGN',
  Dnp = 'DNP'
}

export type ManUser = {
  __typename?: 'ManUser';
  /** Null if the user no longer exists. */
  email?: Maybe<Scalars['String']>;
  /** Null if the user no longer exists. */
  firstName?: Maybe<Scalars['String']>;
  /** Null if the user no longer exists. */
  lastName?: Maybe<Scalars['String']>;
  /** The internal user ID. */
  userId: Scalars['String'];
  /** Null if the user no longer exists. */
  userName?: Maybe<Scalars['String']>;
};

export type ManViolation = {
  __typename?: 'ManViolation';
  description?: Maybe<Scalars['String']>;
  /**
   * dot delimited string describing location of issue
   * layers.[1].process
   */
  field?: Maybe<Scalars['String']>;
  type?: Maybe<ManViolationType>;
};

export type ManViolationInput = {
  description?: InputMaybe<Scalars['String']>;
  /**
   * dot delimited string describing location of issue
   * layers.[1].process
   */
  field?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ManViolationType>;
};

export enum ManViolationType {
  Inconsistent = 'INCONSISTENT',
  TooBig = 'TOO_BIG',
  TooSmall = 'TOO_SMALL',
  Unknown = 'UNKNOWN',
  Unsupported = 'UNSUPPORTED'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new SCR processing run for a given CSV file. */
  datScrCreateJob: DatScrCreateJobPayload;
  /** Delete an SCR job and any corresponding reports. */
  datScrDeleteJob: DatScrDeleteJobPayload;
  /** Adds users to the specified group. */
  desAddUsersToGroup: DesAddUsersToGroupPayload;
  desCreateComment: DesCreateCommentPayload;
  desCreateCommentThread: DesCreateCommentThreadPayload;
  /** Creates a manufacture package. */
  desCreateManufacturePackage: DesCreateManufacturePackagePayload;
  /** Creates a project task. */
  desCreateProjectTask: DesCreateTaskPayload;
  /** Creates a new comment for the specified task. */
  desCreateTaskComment: DesCreateTaskCommentPayload;
  /** Creates a user. */
  desCreateUser: DesCreateUserPayload;
  /** Creates a new user group. */
  desCreateUserGroup: DesCreateUserGroupPayload;
  /** Creates a workspace task. */
  desCreateWorkspaceTask: DesCreateTaskPayload;
  desDeleteComment: DesDeleteCommentPayload;
  desDeleteCommentThread: DesDeleteCommentThreadPayload;
  /** Deletes the task specified by its node ID. */
  desDeleteTask: DesDeleteTaskPayload;
  /** Deletes the specified task comment. */
  desDeleteTaskComment: DesDeleteTaskCommentPayload;
  /** Deletes the specified user. */
  desDeleteUser: DesDeleteUserPayload;
  /** Deletes the specified user group. */
  desDeleteUserGroup: DesDeleteUserGroupPayload;
  desLaunchWorkflow: DesLaunchWorkflowPayload;
  /** Releases the specified component. */
  desReleaseComponent: DesReleaseComponentPayload;
  /** Removes users from the specified group. */
  desRemoveUsersFromGroup: DesRemoveUsersFromGroupPayload;
  desTerminateWorkflows: DesTerminateWorkflowsPayload;
  desUpdateComment: DesUpdateCommentPayload;
  /** Updates parameters for the specified component (creates a new revision). */
  desUpdateComponentRevisionParameters: DesUpdateComponentRevisionParametersPayload;
  /** Updates a specific result block. */
  desUpdateReuseBlock: DesUpdateReuseBlockPayload;
  /** Updates the specified task. */
  desUpdateTask: DesUpdateTaskPayload;
  /** Updates the specified task comment. */
  desUpdateTaskComment: DesUpdateTaskCommentPayload;
  /** Updates the specified user properties. */
  desUpdateUser: DesUpdateUserPayload;
  /** Updates the specified user group. */
  desUpdateUserGroup: DesUpdateUserGroupPayload;
  /** *** PROTOTYPE, SUBJECT TO CHANGE *** */
  desUploadCollaborationSimulation: DesUploadCollaborationSimulationPayload;
  /** Uploads the project zip file. */
  desUploadProject: DesUploadProjectPayload;
  /** accept quote, confirm order as placed.  */
  manAcceptOrderQuote?: Maybe<ManOrder>;
  manCreateAssembly?: Maybe<ManCreateAssemblyResponse>;
  manCreateOrder?: Maybe<ManCreateOrderResponse>;
  manCreateRapidQuoteRequest?: Maybe<ManRapidQuoteResponse>;
  manInsertOrderBatchedEvent?: Maybe<ManOrder>;
  manInsertOrderConsignmentDetailsEvent?: Maybe<ManOrder>;
  manInsertOrderEmsAcceptEvent?: Maybe<ManOrder>;
  manInsertOrderEvent?: Maybe<ManOrder>;
  manInsertOrderPartsOrderedEvent?: Maybe<ManOrder>;
  manInsertOrderPartsReceivedEvent?: Maybe<ManOrder>;
  manInsertOrderPcbsOrderedEvent?: Maybe<ManOrder>;
  manInsertOrderPcbsReceivedEvent?: Maybe<ManOrder>;
  manInsertOrderProcessStartEvent?: Maybe<ManOrder>;
  manInsertOrderReviewEvent?: Maybe<ManOrder>;
  manInsertOrderShipUpdateEvent?: Maybe<ManOrder>;
  manInsertOrderShippedEvent?: Maybe<ManOrder>;
  manRespondBulkRapidQuoteRequest: Scalars['ID'];
  /** for a manufacturer to return a rapid quote reponse */
  manRespondRapidQuoteRequest: Scalars['ID'];
  manUpdateBomResolution?: Maybe<ManBomResolution>;
  manUpdateOrderQty?: Maybe<ManOrder>;
  manUpdateOrderShipping?: Maybe<ManOrder>;
};


export type MutationDatScrCreateJobArgs = {
  input: DatScrCreateJobInput;
};


export type MutationDatScrDeleteJobArgs = {
  input: DatScrDeleteJobInput;
};


export type MutationDesAddUsersToGroupArgs = {
  input: DesAddUsersToGroupInput;
};


export type MutationDesCreateCommentArgs = {
  input: DesCreateCommentInput;
};


export type MutationDesCreateCommentThreadArgs = {
  input: DesCreateCommentThreadInput;
};


export type MutationDesCreateManufacturePackageArgs = {
  input: DesCreateManufacturePackageInput;
};


export type MutationDesCreateProjectTaskArgs = {
  input: DesCreateProjectTaskInput;
};


export type MutationDesCreateTaskCommentArgs = {
  input: DesCreateTaskCommentInput;
};


export type MutationDesCreateUserArgs = {
  input: DesCreateUserInput;
};


export type MutationDesCreateUserGroupArgs = {
  input: DesCreateUserGroupInput;
};


export type MutationDesCreateWorkspaceTaskArgs = {
  input: DesCreateWorkspaceTaskInput;
};


export type MutationDesDeleteCommentArgs = {
  input: DesDeleteCommentInput;
};


export type MutationDesDeleteCommentThreadArgs = {
  input: DesDeleteCommentThreadInput;
};


export type MutationDesDeleteTaskArgs = {
  input: DesDeleteTaskInput;
};


export type MutationDesDeleteTaskCommentArgs = {
  input: DesDeleteTaskCommentInput;
};


export type MutationDesDeleteUserArgs = {
  input: DesDeleteUserInput;
};


export type MutationDesDeleteUserGroupArgs = {
  input: DesDeleteUserGroupInput;
};


export type MutationDesLaunchWorkflowArgs = {
  input: DesLaunchWorkflowInput;
};


export type MutationDesReleaseComponentArgs = {
  input: DesReleaseComponentInput;
};


export type MutationDesRemoveUsersFromGroupArgs = {
  input: DesRemoveUsersFromGroupInput;
};


export type MutationDesTerminateWorkflowsArgs = {
  input: DesTerminateWorkflowsInput;
};


export type MutationDesUpdateCommentArgs = {
  input: DesUpdateCommentInput;
};


export type MutationDesUpdateComponentRevisionParametersArgs = {
  input: DesUpdateComponentRevisionParametersInput;
};


export type MutationDesUpdateReuseBlockArgs = {
  input: DesUpdateReuseBlockInput;
};


export type MutationDesUpdateTaskArgs = {
  input: DesUpdateTaskInput;
};


export type MutationDesUpdateTaskCommentArgs = {
  input: DesUpdateTaskCommentInput;
};


export type MutationDesUpdateUserArgs = {
  input: DesUpdateUserInput;
};


export type MutationDesUpdateUserGroupArgs = {
  input: DesUpdateUserGroupInput;
};


export type MutationDesUploadCollaborationSimulationArgs = {
  input: DesUploadCollaborationSimulationInput;
};


export type MutationDesUploadProjectArgs = {
  input: DesUploadProjectInput;
};


export type MutationManAcceptOrderQuoteArgs = {
  orderId: Scalars['ID'];
  paymentOptions?: InputMaybe<ManPaymentSelectionInput>;
  quoteId: Scalars['ID'];
};


export type MutationManCreateAssemblyArgs = {
  commitId?: InputMaybe<Scalars['ID']>;
  projectId: Scalars['ID'];
  quoteRequest: Scalars['ID'];
};


export type MutationManCreateOrderArgs = {
  assemblyId: Scalars['ID'];
  qty?: InputMaybe<Scalars['Int']>;
};


export type MutationManCreateRapidQuoteRequestArgs = {
  meta: ManBoardMetaInput;
  qty: Scalars['Int'];
  shipping?: InputMaybe<ManShippingDetailsInput>;
};


export type MutationManInsertOrderBatchedEventArgs = {
  input: ManOrderBatchedInput;
};


export type MutationManInsertOrderConsignmentDetailsEventArgs = {
  input: ManOrderConsignmentDetailsInput;
};


export type MutationManInsertOrderEmsAcceptEventArgs = {
  input: ManOrderEmsAcceptInput;
};


export type MutationManInsertOrderEventArgs = {
  attributes?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<ManOrderEventType>;
  id: Scalars['ID'];
};


export type MutationManInsertOrderPartsOrderedEventArgs = {
  input: ManOrderPartsOrderedInput;
};


export type MutationManInsertOrderPartsReceivedEventArgs = {
  input: ManOrderPartsReceivedInput;
};


export type MutationManInsertOrderPcbsOrderedEventArgs = {
  input: ManOrderPcbsOrderedInput;
};


export type MutationManInsertOrderPcbsReceivedEventArgs = {
  input: ManOrderPcbsReceivedInput;
};


export type MutationManInsertOrderProcessStartEventArgs = {
  input: ManOrderProcessStartInput;
};


export type MutationManInsertOrderReviewEventArgs = {
  input: ManOrderReviewInput;
};


export type MutationManInsertOrderShipUpdateEventArgs = {
  input: ManOrderShipEstimateInput;
};


export type MutationManInsertOrderShippedEventArgs = {
  input: ManOrderShippedInput;
};


export type MutationManRespondBulkRapidQuoteRequestArgs = {
  id: Scalars['ID'];
  quotes: Array<ManQuoteInput>;
};


export type MutationManRespondRapidQuoteRequestArgs = {
  id: Scalars['ID'];
  quote: ManQuoteInput;
};


export type MutationManUpdateBomResolutionArgs = {
  newSelections?: InputMaybe<Array<ManPartSelectionInput>>;
  projectId: Scalars['ID'];
  quoteRequestId: Scalars['ID'];
};


export type MutationManUpdateOrderQtyArgs = {
  orderId: Scalars['ID'];
  qty: Scalars['Int'];
};


export type MutationManUpdateOrderShippingArgs = {
  orderId: Scalars['ID'];
  shipping: ManShippingDetailsInput;
};

/** The node interface is implemented by entities that have a global unique identifier. */
export type Node = {
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Gets a single application by its unique identifier. */
  admApplicationById?: Maybe<AdmApplication>;
  /** Get details about the organization(s) the current user belongs to. */
  admOrganizations: Array<AdmOrganization>;
  datBomAnalyses: Array<DatBomAnalysis>;
  datBomAnalysis: DatBomAnalysisPayload;
  datBomPart: DatBomPartsResult;
  datBomPartHistories: Array<Maybe<DatBomPartHistory>>;
  datBomParts: Array<DatBomPartsResult>;
  datEddiLatestEdition: DatEddiEdition;
  datResolvedBomItems: DatResolvedBomItemsPayload;
  /** Get an SCR Job with a specific id */
  datScrJob: DatScrJob;
  /** Get a list of SCR jobs. */
  datScrJobs: Array<DatScrJob>;
  /** Get link to a downloadable SCR report. */
  datScrReport: DatScrReport;
  /** Get current metered usage statistics. */
  datScrUsage: DatScrUsage;
  /** Gets the BOM by its identifier. */
  desBomById?: Maybe<DesBom>;
  /** Search for a specific comment thread associated with a project. */
  desCommentThread?: Maybe<DesCommentThread>;
  /** Search for comment threads associated with a project. */
  desCommentThreads: Array<DesCommentThread>;
  desComponentById?: Maybe<DesComponent>;
  desDesignItemById?: Maybe<DesDesignItem>;
  desLibrary: DesLibrary;
  /** Gets the first allowed life cycle by the content kind. */
  desLifeCycleDefinitionByContentTypeKind: DesLifeCycleDefinition;
  /** Gets life cycle definitions. */
  desLifeCycleDefinitions: Array<DesLifeCycleDefinition>;
  desManufacturePackageById?: Maybe<DesManufacturePackage>;
  desManufacturePackageCreationJob?: Maybe<DesManufacturePackageCreationJob>;
  desManufacturePackages: Array<DesManufacturePackage>;
  /** Search a specific project by its unique identifier. */
  desProjectById?: Maybe<DesProject>;
  /** *** PROTOTYPE, SUBJECT TO CHANGE *** */
  desProjectCollaborationSimulationLatestRevision: DesCollaborationSimulationRevision;
  /** *** PROTOTYPE, SUBJECT TO CHANGE *** */
  desProjectCollaborationSimulationRevisions?: Maybe<DesCollaborationSimulationRevisionConnection>;
  /** Gets the unique identifier for a project from its internal identifier. */
  desProjectIdFromAfsId: DesProjectIdPayload;
  /** The list of project tasks. */
  desProjectTasks?: Maybe<DesTaskConnection>;
  /** Search projects within a workspace with results in paged groups. */
  desProjects?: Maybe<DesProjectConnection>;
  desReleaseById?: Maybe<DesRelease>;
  /** Find a specific reuse block by its unique identifier. */
  desReuseBlockById?: Maybe<DesReuseBlock>;
  /** Find a specific reuse block revision by its unique identifier. */
  desReuseBlockRevisionById?: Maybe<DesReuseBlockRevision>;
  desRevisionDetailsById?: Maybe<DesRevisionDetails>;
  /** Gets the first allowed naming scheme by the content kind. */
  desRevisionNamingSchemeByContentTypeKind: DesRevisionNamingScheme;
  /** Gets revision naming schemes. */
  desRevisionNamingSchemes: Array<DesRevisionNamingScheme>;
  /** Gets the specified settings. */
  desSettings: Array<Maybe<Scalars['String']>>;
  desSharedWithMe: DesSharedWithMe;
  /** Gets the specified workspace team. */
  desTeam: DesTeam;
  /** Gets the authorized user. */
  desUserByAuth: DesUser;
  /** Gets a user by the specified global ID. */
  desUserByGlobalId?: Maybe<DesUser>;
  /** Gets the specified workspace users by IDs. */
  desUsers: Array<Maybe<DesUser>>;
  /** Search a specific workspace by its unique identifier. */
  desWorkspaceById?: Maybe<DesWorkspace>;
  /** Get a list of workspace locations. */
  desWorkspaceLocations: Array<DesWorkspaceLocation>;
  /** The list of workspace tasks. */
  desWorkspaceTasks?: Maybe<DesTaskConnection>;
  /** Search for workspaces associated with this account. */
  desWorkspaces: Array<DesWorkspace>;
  manAltimadeLogin?: Maybe<Scalars['String']>;
  manAssembly?: Maybe<ManAssembly>;
  manBomResolution?: Maybe<ManBomResolution>;
  manListProjectOrders?: Maybe<Array<Maybe<ManOrder>>>;
  manOrder?: Maybe<ManOrder>;
  manOrderEventById?: Maybe<ManOrderEvent>;
  manProjectFeatures?: Maybe<ManFeatures>;
  manRapidQuoteRequest?: Maybe<ManRapidQuoteRequest>;
  /** get a the quotes from previously submitted metadata */
  manRapidQuotes?: Maybe<ManRapidQuoteResponse>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** Get all attributes */
  supAttributes: Array<SupAttribute>;
  /** Get categories */
  supCategories: Array<SupCategory>;
  /** Nexar infrastructure, subject to change. */
  supCiivaIdFromPartId?: Maybe<Scalars['String']>;
  /** Get manufacturer companies */
  supManufacturers: Array<SupCompany>;
  /** Match multiple manufacturer + mpn pairs at once.  Useful for when you have a list of parts, as with a BOM (Bill of Materials) */
  supMultiMatch: Array<SupPartMatch>;
  /** @deprecated Use `supPartIdFromCiivaId`. */
  supOctopartIdFromCiivaId?: Maybe<Scalars['String']>;
  /** Nexar supply part data for internal use only. */
  supPartExtrasByPartId?: Maybe<SupPartExtras>;
  /** Nexar infrastructure, subject to change. */
  supPartIdFromCiivaId?: Maybe<Scalars['String']>;
  /** Nexar infrastructure, subject to change. */
  supPartIdsFromCiivaIds: Array<Maybe<Scalars['String']>>;
  /** Get parts by ID. */
  supParts: Array<Maybe<SupPart>>;
  /** Search parts, including filters, pagination, aggregation, sorting */
  supSearch: SupPartResultSet;
  /** Search parts by mpn only, including filters, pagination, aggregation, sorting */
  supSearchMpn: SupPartResultSet;
  /** Get seller companies (distributors) */
  supSellers: Array<SupCompany>;
  /** Suggest an alternate `q` when no results are found */
  supSpellingCorrection: Array<SupSpellingCorrection>;
  /** Attempt to complete a partial query string.  Used for autosuggest / typeahead text inputs. */
  supSuggest: Array<SupSuggestion>;
};


export type QueryAdmApplicationByIdArgs = {
  id: Scalars['String'];
};


export type QueryDatBomAnalysesArgs = {
  items: Array<DatBomPartItemInput>;
};


export type QueryDatBomAnalysisArgs = {
  input: DatBomAnalysisItemsInput;
};


export type QueryDatBomPartArgs = {
  item: DatBomItemInput;
};


export type QueryDatBomPartHistoriesArgs = {
  partIds: Array<Scalars['String']>;
};


export type QueryDatBomPartsArgs = {
  items: Array<DatBomItemInput>;
};


export type QueryDatResolvedBomItemsArgs = {
  input: DatUnresolvedBomItemsInput;
};


export type QueryDatScrJobArgs = {
  jobId: Scalars['String'];
};


export type QueryDatScrJobsArgs = {
  jobIds?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryDatScrReportArgs = {
  jobId: Scalars['String'];
};


export type QueryDesBomByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesCommentThreadArgs = {
  projectId: Scalars['ID'];
  threadId: Scalars['String'];
};


export type QueryDesCommentThreadsArgs = {
  projectId: Scalars['ID'];
};


export type QueryDesComponentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesDesignItemByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesLibraryArgs = {
  workspaceUrl: Scalars['String'];
};


export type QueryDesLifeCycleDefinitionByContentTypeKindArgs = {
  kind: DesContentTypeKind;
  workspaceUrl: Scalars['String'];
};


export type QueryDesLifeCycleDefinitionsArgs = {
  workspaceUrl: Scalars['String'];
};


export type QueryDesManufacturePackageByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesManufacturePackageCreationJobArgs = {
  id: Scalars['ID'];
};


export type QueryDesProjectByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesProjectCollaborationSimulationLatestRevisionArgs = {
  domainName: Scalars['String'];
  projectId: Scalars['ID'];
  projectTypeName: Scalars['String'];
};


export type QueryDesProjectCollaborationSimulationRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  domainName: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
};


export type QueryDesProjectIdFromAfsIdArgs = {
  afsId: Scalars['String'];
  isSharedProject?: InputMaybe<Scalars['Boolean']>;
  workspaceUrl: Scalars['String'];
};


export type QueryDesProjectTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
};


export type QueryDesProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DesProjectFilterInput>;
  workspaceUrl: Scalars['String'];
};


export type QueryDesReleaseByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesReuseBlockByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesReuseBlockRevisionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesRevisionDetailsByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesRevisionNamingSchemeByContentTypeKindArgs = {
  kind: DesContentTypeKind;
  workspaceUrl: Scalars['String'];
};


export type QueryDesRevisionNamingSchemesArgs = {
  workspaceUrl: Scalars['String'];
};


export type QueryDesSettingsArgs = {
  names: Array<Scalars['String']>;
  workspaceUrl: Scalars['String'];
};


export type QueryDesTeamArgs = {
  workspaceUrl: Scalars['String'];
};


export type QueryDesUserByGlobalIdArgs = {
  id: Scalars['String'];
};


export type QueryDesUsersArgs = {
  ids: Array<Scalars['String']>;
  workspaceUrl: Scalars['String'];
};


export type QueryDesWorkspaceByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDesWorkspaceTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  workspaceUrl: Scalars['String'];
};


export type QueryDesWorkspacesArgs = {
  where?: InputMaybe<DesWorkspaceFilterInput>;
};


export type QueryManAltimadeLoginArgs = {
  gsid?: InputMaybe<Scalars['ID']>;
};


export type QueryManAssemblyArgs = {
  id: Scalars['ID'];
};


export type QueryManBomResolutionArgs = {
  projectId: Scalars['ID'];
  quoteRequestId: Scalars['ID'];
};


export type QueryManListProjectOrdersArgs = {
  id: Scalars['ID'];
};


export type QueryManOrderArgs = {
  orderId: Scalars['ID'];
};


export type QueryManOrderEventByIdArgs = {
  id: Scalars['ID'];
};


export type QueryManProjectFeaturesArgs = {
  input: ManProjectFeatureInput;
};


export type QueryManRapidQuoteRequestArgs = {
  id: Scalars['ID'];
};


export type QueryManRapidQuotesArgs = {
  id: Scalars['ID'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QuerySupCategoriesArgs = {
  ids?: InputMaybe<Array<Scalars['String']>>;
  paths?: InputMaybe<Array<Scalars['String']>>;
};


export type QuerySupCiivaIdFromPartIdArgs = {
  partId: Scalars['String'];
};


export type QuerySupManufacturersArgs = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};


export type QuerySupMultiMatchArgs = {
  country?: Scalars['String'];
  currency?: Scalars['String'];
  customPricingCredentials?: InputMaybe<Array<SupApiCredentials>>;
  distributorApi?: InputMaybe<Scalars['Boolean']>;
  distributorApiTimeout?: Scalars['String'];
  options?: InputMaybe<SupPartMatchOptions>;
  queries: Array<SupPartMatchQuery>;
};


export type QuerySupOctopartIdFromCiivaIdArgs = {
  ciivaId: Scalars['String'];
  workspaceUrl: Scalars['String'];
};


export type QuerySupPartExtrasByPartIdArgs = {
  partId: Scalars['String'];
};


export type QuerySupPartIdFromCiivaIdArgs = {
  ciivaId: Scalars['String'];
};


export type QuerySupPartIdsFromCiivaIdsArgs = {
  ciivaIds: Array<Scalars['String']>;
};


export type QuerySupPartsArgs = {
  country?: Scalars['String'];
  currency?: Scalars['String'];
  customPricingCredentials?: InputMaybe<Array<SupApiCredentials>>;
  distributorApi?: InputMaybe<Scalars['Boolean']>;
  distributorApiTimeout?: Scalars['String'];
  ids: Array<Scalars['String']>;
};


export type QuerySupSearchArgs = {
  country?: Scalars['String'];
  currency?: Scalars['String'];
  customPricingCredentials?: InputMaybe<Array<SupApiCredentials>>;
  distributorApi?: InputMaybe<Scalars['Boolean']>;
  distributorApiTimeout?: Scalars['String'];
  filters?: InputMaybe<Scalars['Map']>;
  inStockOnly?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  sortDir?: InputMaybe<SupSortDirection>;
  start?: InputMaybe<Scalars['Int']>;
};


export type QuerySupSearchMpnArgs = {
  country?: Scalars['String'];
  currency?: Scalars['String'];
  customPricingCredentials?: InputMaybe<Array<SupApiCredentials>>;
  distributorApi?: InputMaybe<Scalars['Boolean']>;
  distributorApiTimeout?: Scalars['String'];
  filters?: InputMaybe<Scalars['Map']>;
  inStockOnly?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  sortDir?: InputMaybe<SupSortDirection>;
  start?: InputMaybe<Scalars['Int']>;
};


export type QuerySupSellersArgs = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};


export type QuerySupSpellingCorrectionArgs = {
  q: Scalars['String'];
};


export type QuerySupSuggestArgs = {
  categoryId?: InputMaybe<Scalars['String']>;
  partNumbersOnly?: InputMaybe<Scalars['Boolean']>;
  q: Scalars['String'];
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  desOnCommentUpdated: DesCommentNotification;
};


export type SubscriptionDesOnCommentUpdatedArgs = {
  input: DesOnCommentUpdatedInput;
};

export type SupApiCredentials = {
  /** The name of the API that you are providing credentials for. An Octopart representative will give this value to you if needed. */
  apiName: Scalars['String'];
  /** Authentication details. `clientId` and `clientSecret` should be given together when an API requires them. */
  clientId?: InputMaybe<Scalars['String']>;
  /** Authentication details. `clientId` and `clientSecret` should be given together when an API requires them. */
  clientSecret?: InputMaybe<Scalars['String']>;
  /** Authentication details. `username` and `password` should be given together when an API requires them. */
  password?: InputMaybe<Scalars['String']>;
  /** Authentication details. `username` and `password` should be given together when an API requires them. */
  username?: InputMaybe<Scalars['String']>;
};

/** Used to show the filters that are applied to current search. */
export type SupAppliedFilter = {
  __typename?: 'SupAppliedFilter';
  /** human readable values to display in the UI */
  displayValues: Array<Scalars['String']>;
  /** human readable name to display in the UI */
  name: Scalars['String'];
  /** shortname is the key in the filters Map.  Usually an attribute shortname, or `manufacturerId`, `distributorId`, etc. */
  shortname: Scalars['String'];
  /** values in the filter Map. */
  values: Array<Scalars['String']>;
};

/** Defines an attribute like Capacitance or Resistance. */
export type SupAttribute = {
  __typename?: 'SupAttribute';
  /** use to group together similar attributes, e.g. Technical, Physical, Compliance */
  group: Scalars['String'];
  /** Internal Octopart ID */
  id: Scalars['ID'];
  /** display name */
  name: Scalars['String'];
  /** use as key for `sort` or `filter` in part search */
  shortname: Scalars['String'];
  /** The short name of the units */
  unitsName: Scalars['String'];
  /** The symbol of the units */
  unitsSymbol: Scalars['String'];
  /** The type of the value */
  valueType: Scalars['String'];
};

/** Groups similar attributes together, as can be seen with column groups in specs view */
export type SupAttributeGroup = {
  __typename?: 'SupAttributeGroup';
  /** Attributes in group */
  attributes: Array<SupAttribute>;
  /** Name of group, e.g. Technical, Physical, Compliance */
  name: Scalars['String'];
};

/** Information for use on /electronic-parts Category pages. */
export type SupBlurb = {
  __typename?: 'SupBlurb';
  /** Longer description of Category. */
  content: Scalars['String'];
  /** Short description of Category. */
  description: Scalars['String'];
  /** Category name. */
  name: Scalars['String'];
  /** Path to /electronic-parts Category page. */
  pathName: Scalars['String'];
};

/** cadAgg produces a CadBucket with the count of parts that have CAD Symbol + Footprint and 3D model */
export type SupCadBucket = {
  __typename?: 'SupCadBucket';
  cadState: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
};

/**
 * A Category exists in a Category tree.  Examples include Passive Components or Capacitors.  The `path` field is helpful to see where a category is in the tree.
 * Category id `4161` is the root of tree.
 */
export type SupCategory = {
  __typename?: 'SupCategory';
  /** List of all ancestor in category tree. */
  ancestors: Array<SupCategory>;
  /** Blurb for Category, used on /electronic-parts pages. */
  blurb?: Maybe<SupBlurb>;
  /** List of direct children in category tree. */
  children: Array<SupCategory>;
  /** Octopart internal id.  Root id is 4161 */
  id: Scalars['ID'];
  /** Display name */
  name: Scalars['String'];
  /** Number of parts in Category. */
  numParts: Scalars['Int'];
  /** ID of parent category. */
  parentId: Scalars['ID'];
  /** Slash separated path.  Can be used to visit URL for category page.  (e.g. `/electronic-parts/circuit-protection/esd-and-circuit-protection-ics`) */
  path: Scalars['String'];
  /** List of Attributes deemed to be relevant to this category.  (e.g. Resistance for Resistor category).  Useful for showing contextual filters in UI. */
  relevantAttributes: Array<SupAttribute>;
};

/** categoryAgg produces a CategoryBucket with category + counts */
export type SupCategoryBucket = {
  __typename?: 'SupCategoryBucket';
  category: SupCategory;
  count?: Maybe<Scalars['Int']>;
};

/** A company record represents a manufacturer or distributor, depending on context. */
export type SupCompany = {
  __typename?: 'SupCompany';
  /** Aliases of company */
  aliases: Array<Scalars['String']>;
  /** The country code for the display flag */
  displayFlag?: Maybe<Scalars['String']>;
  /** Homepage URL of company */
  homepageUrl?: Maybe<Scalars['String']>;
  /** Octopart internal id */
  id: Scalars['ID'];
  /**
   * True if a distributor is a broker.  See [authorized](https://octopart.com/authorized) for more information.
   * @deprecated use `PartSeller.is_broker` instead
   */
  isBroker: Scalars['Boolean'];
  /** True if a distributor has an API integration with Octopart to provide latest pricing and stock data. */
  isDistributorApi: Scalars['Boolean'];
  /** True if a manufacturer participates in Octopart's Verified Manufacturer program.  See [verified](https://octopart.com/verified) for more information. */
  isVerified: Scalars['Boolean'];
  /** Display name of company */
  name: Scalars['String'];
  /** Used for URLs like `/manufacturers/aimtec` or `/distributors/digi-key` */
  slug: Scalars['String'];
};

/** manufacturerAgg and distributorAgg produce a CompanyBucket with company + counts */
export type SupCompanyBucket = {
  __typename?: 'SupCompanyBucket';
  company: SupCompany;
  count?: Maybe<Scalars['Int']>;
};

/** A country's name, country code, and continent code. */
export type SupCountry = {
  __typename?: 'SupCountry';
  continentCode: Scalars['String'];
  countryCode: Scalars['String'];
  name: Scalars['String'];
};

/** Textual description of a part */
export type SupDescription = {
  __typename?: 'SupDescription';
  /** Source of description.  Used for attribution. */
  creditString: Scalars['String'];
  /** Source URL of description.  Used for attribution. */
  creditUrl: Scalars['String'];
  /** Description text */
  text: Scalars['String'];
};

/** Document represents a PDF file and can be a Datasheet, Compliance Document, PCN, etc. */
export type SupDocument = {
  __typename?: 'SupDocument';
  createdAt?: Maybe<Scalars['Time']>;
  creditString: Scalars['String'];
  creditUrl: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  pageCount?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};

/** DocumentCollection groups documents together by type: Datasheets, Compliance Statements. */
export type SupDocumentCollection = {
  __typename?: 'SupDocumentCollection';
  /** List of Documents in group */
  documents: Array<SupDocument>;
  /** Name of group, e.g. Datasheets */
  name: Scalars['String'];
};

/** Image of a part.  In the case of some symbol and footprint images, the scaled version may not actually be scaled and cropped, and may need to be scaled using CSS or other techniques. */
export type SupImage = {
  __typename?: 'SupImage';
  /** Source of description.  Used for attribution. */
  creditString: Scalars['String'];
  /** Source URL of description.  Used for attribution. */
  creditUrl: Scalars['String'];
  /** Image URL */
  url: Scalars['String'];
  /** @deprecated use `url` instead */
  url55px: Scalars['String'];
  /** @deprecated use `url` instead */
  url75px: Scalars['String'];
  /** @deprecated use `url` instead */
  url90px: Scalars['String'];
  /** @deprecated use `url` instead */
  urlLargest: Scalars['String'];
};

export enum SupNexarFeatureId {
  CadModels = 'CAD_MODELS',
  Datasheets = 'DATASHEETS',
  InventoryHistory = 'INVENTORY_HISTORY',
  LeadTime = 'LEAD_TIME',
  Lifecycle = 'LIFECYCLE',
  SimilarParts = 'SIMILAR_PARTS',
  SpellingCorrections = 'SPELLING_CORRECTIONS',
  Suggestions = 'SUGGESTIONS',
  TechSpecs = 'TECH_SPECS'
}

/** An offer is a specific buyable part from a distributor, with specific packaging, pricing, stock, moq. */
export type SupOffer = {
  __typename?: 'SupOffer';
  /** Cache ID */
  _cacheId: Scalars['String'];
  /** The URL to view offer on distributor website.  This will redirect via Octopart's server. */
  clickUrl: Scalars['String'];
  /** The code indicating the region(s) for which offer is valid */
  eligibleRegion?: Maybe<Scalars['String']>;
  /** Number of days to acquire parts from factory. */
  factoryLeadDays?: Maybe<Scalars['Int']>;
  /** Order multiple for factory orders. */
  factoryPackQuantity?: Maybe<Scalars['Int']>;
  /** Octopart internal ID for this offer */
  id: Scalars['ID'];
  /** Octopart internal URL for this offer. */
  internalUrl: Scalars['String'];
  /** Number of units available to be shipped.  (aka Stock, Quantity) */
  inventoryLevel: Scalars['Int'];
  /** Whether this offer is specific to the customer making the request. */
  isCustomPricing: Scalars['Boolean'];
  /** Minimum Order Quantity: smallest number of parts that can be purchased */
  moq?: Maybe<Scalars['Int']>;
  /** The quantity of parts as packaged by the seller. */
  multipackQuantity?: Maybe<Scalars['Int']>;
  /** Number of parts on order from factory. */
  onOrderQuantity?: Maybe<Scalars['Int']>;
  /** Number of items which must be ordered together. */
  orderMultiple?: Maybe<Scalars['Int']>;
  /** Packaging of parts (eg Tape, Reel) */
  packaging?: Maybe<Scalars['String']>;
  prices: Array<SupPricePoint>;
  /** Stock Keeping Unit used by internally by distributor */
  sku: Scalars['String'];
  /** The last time data was received from distributor feed or API for this offer. */
  updated: Scalars['Time'];
};

/** Part model contains the relevant data around a part, including: datasheets, specs, sellers + offers, images, etc. */
export type SupPart = {
  __typename?: 'SupPart';
  /** Cache ID */
  _cacheId: Scalars['String'];
  /** This part might be known by these alternate MPNs */
  akaMpns: Array<Scalars['String']>;
  /** The average stock level at each distributor */
  avgAvail: Scalars['Float'];
  bestDatasheet?: Maybe<SupDocument>;
  bestImage?: Maybe<SupImage>;
  /** Data about part's CAD model.  If null `cadRequestUrl` can be used to request a CAD model be made. */
  cad?: Maybe<SupPartCad>;
  /** URL to request a CAD model from eeconcierge if a part doesn't already have a CAD model.  Will be null part is not eligible, e.g. a multimeter */
  cadRequestUrl?: Maybe<Scalars['String']>;
  category?: Maybe<SupCategory>;
  /** Parts identified by the manufacturer as companion products. */
  companionProducts: Array<SupSponsoredPart>;
  /** A [Map](#map) of number of related objects.  Can be used to know the number of `images` or `descriptions` without having to request those related objects. */
  counts: Scalars['Map'];
  /** All part descriptions from sources */
  descriptions: Array<SupDescription>;
  /** Documents including Datasheets, Compliance Documents, PCNs */
  documentCollections: Array<SupDocumentCollection>;
  /** The estimated factory lead time in days derived from trusted distributor offers. */
  estimatedFactoryLeadDays?: Maybe<Scalars['Int']>;
  /** Nexar supply part data for internal use only. */
  extras?: Maybe<SupPartExtras>;
  /** A link to a manufacturer page to request free sample kits for this part. */
  freeSampleUrl?: Maybe<Scalars['String']>;
  /** Best guess at a generic MPN */
  genericMpn: Scalars['String'];
  /** Octopart internal ID for this part.  Appears at the end of PDP URL / `slug` field. */
  id: Scalars['ID'];
  /** All part images */
  images: Array<SupImage>;
  /** Company that manufactures this part */
  manufacturer: SupCompany;
  /** A link to the manufacturer detail page for this part or series. */
  manufacturerUrl?: Maybe<Scalars['String']>;
  /** The median USD price at quantity 1,000, discarding outliers.  A reasonable estimate of average price for a part. */
  medianPrice1000?: Maybe<SupPricePoint>;
  /** Manufacturer Part Number */
  mpn: Scalars['String'];
  /** manufacturer + mpn for easy display */
  name: Scalars['String'];
  /** A link to the part page on Octopart. Do not include `rel="nofollow"` when linking to this URL. */
  octopartUrl: Scalars['String'];
  referenceDesigns: Array<SupReferenceDesign>;
  /** Companies with Offers for this part */
  sellers: Array<SupPartSeller>;
  series?: Maybe<SupPartSeries>;
  /** Best description around 110 characters long, as can be seen on SERP or PDP.  May need truncation if all descriptions are long. */
  shortDescription: Scalars['String'];
  /** Parts identified by Octopart to be similar in specs and functionality. */
  similarParts: Array<SupPart>;
  /** Path component of PDP URL (e.g. `/ad7792bruz-analog+devices-402798`) */
  slug: Scalars['String'];
  /** Attribute values for this part */
  specs: Array<SupSpec>;
  /** Sum of stock available across all distributors */
  totalAvail: Scalars['Int'];
  /** The UID from Octopart APIv3.  Provided for backwards compatibility, in general ID should be used. */
  v3uid: Scalars['ID'];
};


/** Part model contains the relevant data around a part, including: datasheets, specs, sellers + offers, images, etc. */
export type SupPartSellersArgs = {
  authorizedOnly?: Scalars['Boolean'];
  includeBrokers?: Scalars['Boolean'];
};

export type SupPartCad = {
  __typename?: 'SupPartCad';
  /** URL to add this part to your Upverter library. Requires an Upverter account. */
  addToLibraryUrl?: Maybe<Scalars['String']>;
  downloadUrlAltium: Scalars['String'];
  downloadUrlEagle: Scalars['String'];
  downloadUrlKicad: Scalars['String'];
  downloadUrlOrcad: Scalars['String'];
  footprintImageUrl?: Maybe<Scalars['String']>;
  /** If true, a STEP model will be included with the tool-specific downloads. */
  has3dModel: Scalars['Boolean'];
  hasAltium: Scalars['Boolean'];
  hasEagle: Scalars['Boolean'];
  hasKicad: Scalars['Boolean'];
  hasOrcad: Scalars['Boolean'];
  symbolImageUrl?: Maybe<Scalars['String']>;
};

/** Nexar supply part data for internal use only. */
export type SupPartExtras = {
  __typename?: 'SupPartExtras';
  alternatives: Array<SupPartExtras>;
  confidence?: Maybe<Scalars['Float']>;
  datasheetUrls?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  isRohsCompliant?: Maybe<Scalars['Boolean']>;
  lifeCycle: SupPartLifeCycle;
  parameters?: Maybe<Array<SupPartExtrasParameter>>;
  partId: Scalars['String'];
  technicalDetails?: Maybe<Array<SupPartExtrasTechnicalDetail>>;
};


/** Nexar supply part data for internal use only. */
export type SupPartExtrasAlternativesArgs = {
  first?: Scalars['Int'];
};

export type SupPartExtrasParameter = {
  __typename?: 'SupPartExtrasParameter';
  name: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Scalars['String']>>;
};

export type SupPartExtrasTechnicalDetail = {
  __typename?: 'SupPartExtrasTechnicalDetail';
  name: Scalars['String'];
  value: Scalars['String'];
};

export enum SupPartLifeCycle {
  Active = 'ACTIVE',
  ActiveUnconfirmed = 'ACTIVE_UNCONFIRMED',
  ContactMfr = 'CONTACT_MFR',
  Discontinued = 'DISCONTINUED',
  DiscontinuedUnconfirmed = 'DISCONTINUED_UNCONFIRMED',
  Eol = 'EOL',
  New = 'NEW',
  Nrfnd = 'NRFND',
  Transferred = 'TRANSFERRED',
  Unknown = 'UNKNOWN'
}

export type SupPartMatch = {
  __typename?: 'SupPartMatch';
  /** Possible error message */
  error?: Maybe<Scalars['String']>;
  /** Number of parts matched */
  hits: Scalars['Int'];
  /** Matched parts (may be subset, based on start + limit) */
  parts: Array<SupPart>;
  /** Will match `reference` supplied in PartMatchQuery. */
  reference?: Maybe<Scalars['String']>;
};

export type SupPartMatchOptions = {
  /** a key: value map of filters. See [filter values](https://octopart.com/api/v4/values#attributes) */
  filters?: InputMaybe<Scalars['Map']>;
  /** If true, only parts with at least one authorized seller will be returned. */
  requireAuthorizedSellers?: InputMaybe<Scalars['Boolean']>;
  /** If true, only parts with stock available will be returned. */
  requireStockAvailable?: InputMaybe<Scalars['Boolean']>;
};

export type SupPartMatchQuery = {
  limit?: Scalars['Int'];
  manufacturer?: InputMaybe<Scalars['String']>;
  mpn?: InputMaybe<Scalars['String']>;
  mpnOrSku?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  seller?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  start?: Scalars['Int'];
};

export type SupPartResult = {
  __typename?: 'SupPartResult';
  /** Cache ID */
  _cacheId: Scalars['String'];
  /** If the search `q` is an alternate MPN for this part, the `akaMpn` will be populated with this alternate MPN. */
  akaMpn?: Maybe<Scalars['String']>;
  /**
   * Description with query terms highlighted.  Often this is the same as part.shortDescription,
   * but if the search `q` matched on a different description it may be longer than part.shortDescription and require truncation.
   */
  description: Scalars['String'];
  /** @deprecated always empty */
  explain: Scalars['String'];
  /** The part object */
  part: SupPart;
};

/** Result of part search. */
export type SupPartResultSet = {
  __typename?: 'SupPartResultSet';
  /** Full list of available Attributes in the result set */
  allFilters: Array<SupAttribute>;
  /** If a Category filter is applied, this will be the Category */
  appliedCategory?: Maybe<SupCategory>;
  /** If filters are applied, this will contain display information */
  appliedFilters: Array<SupAppliedFilter>;
  /** Aggregate on the availability of CAD models for the result set */
  cadAgg: Array<SupCadBucket>;
  /** Aggregate on categories for this result set */
  categoryAgg: Array<SupCategoryBucket>;
  /** Aggregate on distributors for this result set */
  distributorAgg: Array<SupCompanyBucket>;
  /** Number of parts in result set */
  hits: Scalars['Int'];
  /** Aggregate on manufacturers for this result set */
  manufacturerAgg: Array<SupCompanyBucket>;
  /** Contains nested part along side some fields specific to the query that explain reason for match. */
  results?: Maybe<Array<SupPartResult>>;
  /**
   * Perform aggregations on Spec values across multiple Attributes.
   * You *must* specify `attributeNames` for this field to be populated.
   * `attributeNames` should be a list of Attribute.shortname values (e.g. `capacitance` or `voltageRatingDc`)
   */
  specAggs: Array<SupSpecAgg>;
  /** Grouped attributes used to render the columns in specs view. */
  specsViewAttributeGroups: Array<SupAttributeGroup>;
  /** Categories that are determined by search algo to be related to the search term.  Useful for suggesting a Category filter in the search UI. */
  suggestedCategories: Array<SupCategoryBucket>;
  /** Attributes that are determined by search algo to be related to the search term.  Useful for suggesting most relevant filters in the search UI. */
  suggestedFilters: Array<SupAttribute>;
  /** @deprecated use `hits` instead */
  total: Scalars['Int'];
  /** If an invalid query was modified or rejected, warnings indicate this fact to the user.  For example if query contained too many tokens, some tokens may be ignored. */
  warnings?: Maybe<Array<Scalars['String']>>;
};


/** Result of part search. */
export type SupPartResultSetCategoryAggArgs = {
  size?: Scalars['Int'];
};


/** Result of part search. */
export type SupPartResultSetDistributorAggArgs = {
  size?: Scalars['Int'];
};


/** Result of part search. */
export type SupPartResultSetManufacturerAggArgs = {
  size?: Scalars['Int'];
};


/** Result of part search. */
export type SupPartResultSetSpecAggsArgs = {
  attributeNames: Array<Scalars['String']>;
  size?: Scalars['Int'];
};

/** A company with offers for a given part */
export type SupPartSeller = {
  __typename?: 'SupPartSeller';
  /** Cache ID */
  _cacheId: Scalars['String'];
  /** The distributor */
  company: SupCompany;
  /** Distributor's country */
  country?: Maybe<Scalars['String']>;
  /** True if the distributor is an authorized distributor for this manufacturer.  See [authorized](https://octopart.com/authorized) for more information. */
  isAuthorized: Scalars['Boolean'];
  /** True if the distributor is a Non-Authorized Dealer.  See [authorized](https://octopart.com/authorized) for more information. */
  isBroker: Scalars['Boolean'];
  /** True if you can request a quote from this seller. */
  isRfq: Scalars['Boolean'];
  /**
   * List of offers.  Multiple offers may exist in different packaging.
   * While multiple geo-targeted offers may exist, currently the API only exposes one geo-targeted offer at a time based on `country` parameter.
   * Please contact us if you have a need to see all geo-targeted offer variants.
   */
  offers: Array<SupOffer>;
  /** List of countries the seller ships to. An empty list represents zero shipping restrictions. */
  shipsToCountries: Array<SupCountry>;
};

/**
 * A Part can be a member of a PartSeries, which represents a product line or "family" of parts from the manufacturer.
 *
 * See [series](https://octopart.com/series) page for examples.
 */
export type SupPartSeries = {
  __typename?: 'SupPartSeries';
  /** Octopart internal ID for this series */
  id: Scalars['ID'];
  /** Name of the part series */
  name: Scalars['String'];
  /** Octopart URL for this series, specific to the parent part */
  url: Scalars['String'];
};

export enum SupPlanTier {
  Basic = 'BASIC',
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Pro = 'PRO'
}

/** Price in a specific currency + quantity.  By supplying a `currency` parameter the API will populate an estimated convertedPrice in the user's desired currency. */
export type SupPricePoint = {
  __typename?: 'SupPricePoint';
  /** Cache ID */
  _cacheId: Scalars['String'];
  /** The exchange rate used to calculate convertedPrice */
  conversionRate: Scalars['Float'];
  /** Currency for `convertedPrice`.  Will match value of `currency` argument. */
  convertedCurrency: Scalars['String'];
  /**
   * Price converted to user's currency using foreign exchange rates.
   *
   * Since this is an estimate, an indicator should be shown to user if currency != convertedCurrency.
   */
  convertedPrice: Scalars['Float'];
  /** Currency for price */
  currency: Scalars['String'];
  /** Price in currency */
  price: Scalars['Float'];
  /** Minimum purchase quantity to get this price (aka price break) */
  quantity: Scalars['Int'];
};

export type SupReferenceDesign = {
  __typename?: 'SupReferenceDesign';
  name: Scalars['String'];
  url: Scalars['String'];
};

export enum SupRole {
  Cadmodels = 'CADMODELS',
  Distributor = 'DISTRIBUTOR',
  Internal = 'INTERNAL',
  Nexarinternal = 'NEXARINTERNAL'
}

export enum SupSortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

/** Represents a specific value of an Attribute for a given Part */
export type SupSpec = {
  __typename?: 'SupSpec';
  attribute: SupAttribute;
  /** The formatted display value */
  displayValue: Scalars['String'];
  /** The value of the spec in SI base units */
  siValue: Scalars['String'];
  /** The units of the value */
  units: Scalars['String'];
  /** The short name of the units */
  unitsName: Scalars['String'];
  /** The symbol of the units */
  unitsSymbol: Scalars['String'];
  /** The actual value */
  value: Scalars['String'];
  /** The type of the value */
  valueType: Scalars['String'];
};

export type SupSpecAgg = {
  __typename?: 'SupSpecAgg';
  attribute: SupAttribute;
  buckets: Array<SupSpecBucket>;
  /** displayMax is the formatted string of max */
  displayMax?: Maybe<Scalars['String']>;
  /** displayMin is the formatted string of min */
  displayMin?: Maybe<Scalars['String']>;
  /** max is the greatest spec value in this result set for numerical attributes */
  max?: Maybe<Scalars['Float']>;
  /** min is the lowest spec value in this result set for numerical attributes */
  min?: Maybe<Scalars['Float']>;
  /** The max value in SI base units */
  siMax?: Maybe<Scalars['String']>;
  /** The min value in SI base units */
  siMin?: Maybe<Scalars['String']>;
  /** The units of the spec */
  units?: Maybe<Scalars['String']>;
  /** The short name of the units */
  unitsName?: Maybe<Scalars['String']>;
  /** The symbol of the units */
  unitsSymbol?: Maybe<Scalars['String']>;
  /** The type of the value */
  valueType: Scalars['String'];
};

export type SupSpecBucket = {
  __typename?: 'SupSpecBucket';
  /** count will be null if aggregation timed out */
  count?: Maybe<Scalars['Int']>;
  /** displayValue is the string value. For numerical attributes it is the formatted version of floatValue */
  displayValue: Scalars['String'];
  /** floatValue is populated if the attribute is numeric */
  floatValue?: Maybe<Scalars['Float']>;
};

export type SupSpellingCorrection = {
  __typename?: 'SupSpellingCorrection';
  correctionString: Scalars['String'];
  hits: Scalars['Int'];
};

/** Part identified by manufacturer as being a companion part, for instance a mated connector pair. */
export type SupSponsoredPart = {
  __typename?: 'SupSponsoredPart';
  /** Cache ID */
  _cacheId: Scalars['String'];
  /** Related part */
  part: SupPart;
  /** @deprecated use part.id instead */
  ppid: Scalars['ID'];
  /** @deprecated unused */
  sourceId: Scalars['ID'];
  /** URL to visit for related part */
  url: Scalars['String'];
};

/** Suggests a query based on partial query input.  Used for autocomplete / typeahead UIs. */
export type SupSuggestion = {
  __typename?: 'SupSuggestion';
  /** If the suggestion should also apply a categoryId filter, this is the Category ID */
  inCategoryId: Scalars['String'];
  /** If the suggestion should also apply a categoryId filter, this is the category name */
  inCategoryName: Scalars['String'];
  /** Suggested text of longer query */
  text: Scalars['String'];
};

export type MpnSearchQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  currency: Scalars['String'];
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SupSortDirection>;
  inStockOnly?: InputMaybe<Scalars['Boolean']>;
  filters?: InputMaybe<Scalars['Map']>;
  distributorApi?: InputMaybe<Scalars['Boolean']>;
  distributorApiTimeout: Scalars['String'];
  authorizedOnly: Scalars['Boolean'];
}>;


export type MpnSearchQuery = { __typename?: 'Query', supSearchMpn: { __typename?: 'SupPartResultSet', hits: number, appliedFilters: Array<{ __typename?: 'SupAppliedFilter', shortname: string, name: string, values: Array<string>, displayValues: Array<string> }>, results?: Array<{ __typename?: 'SupPartResult', _cacheId: string, akaMpn?: string | undefined, description: string, part: { __typename?: 'SupPart', _cacheId: string, freeSampleUrl?: string | undefined, id: string, manufacturerUrl?: string | undefined, mpn: string, slug: string, v3uid: string, bestDatasheet?: { __typename?: 'SupDocument', url: string } | undefined, bestImage?: { __typename?: 'SupImage', url: string } | undefined, category?: { __typename?: 'SupCategory', id: string } | undefined, descriptions: Array<{ __typename?: 'SupDescription', text: string }>, manufacturer: { __typename?: 'SupCompany', id: string, isVerified: boolean, name: string }, medianPrice1000?: { __typename?: 'SupPricePoint', _cacheId: string, convertedCurrency: string, convertedPrice: number } | undefined, sellers: Array<{ __typename?: 'SupPartSeller', _cacheId: string, isAuthorized: boolean, isBroker: boolean, isRfq: boolean, company: { __typename?: 'SupCompany', homepageUrl?: string | undefined, id: string, isDistributorApi: boolean, isVerified: boolean, name: string, slug: string }, offers: Array<{ __typename?: 'SupOffer', _cacheId: string, clickUrl: string, id: string, inventoryLevel: number, moq?: number | undefined, packaging?: string | undefined, sku: string, updated: any, prices: Array<{ __typename?: 'SupPricePoint', _cacheId: string, conversionRate: number, convertedCurrency: string, convertedPrice: number, currency: string, price: number, quantity: number }> }> }>, series?: { __typename?: 'SupPartSeries', id: string, name: string, url: string } | undefined } }> | undefined } };


export const MpnSearchDocument = gql`
    query mpnSearch($q: String, $country: String!, $currency: String!, $start: Int, $limit: Int, $sortDir: SupSortDirection, $inStockOnly: Boolean, $filters: Map, $distributorApi: Boolean, $distributorApiTimeout: String!, $authorizedOnly: Boolean!) {
  supSearchMpn(
    q: $q
    country: $country
    currency: $currency
    start: $start
    limit: $limit
    sortDir: $sortDir
    inStockOnly: $inStockOnly
    filters: $filters
    distributorApi: $distributorApi
    distributorApiTimeout: $distributorApiTimeout
  ) {
    hits
    appliedFilters {
      shortname
      name
      values
      displayValues
    }
    results {
      _cacheId
      akaMpn
      description
      part {
        _cacheId
        bestDatasheet {
          url
        }
        bestImage {
          url
        }
        category {
          id
        }
        descriptions {
          text
        }
        freeSampleUrl
        id
        manufacturer {
          id
          isVerified
          name
        }
        manufacturerUrl
        medianPrice1000 {
          _cacheId
          convertedCurrency
          convertedPrice
        }
        mpn
        sellers(authorizedOnly: $authorizedOnly) {
          _cacheId
          company {
            homepageUrl
            id
            isDistributorApi
            isVerified
            name
            slug
          }
          isAuthorized
          isBroker
          isRfq
          offers {
            _cacheId
            clickUrl
            id
            inventoryLevel
            moq
            packaging
            prices {
              _cacheId
              conversionRate
              convertedCurrency
              convertedPrice
              currency
              price
              quantity
            }
            sku
            updated
          }
        }
        series {
          id
          name
          url
        }
        slug
        v3uid
      }
    }
  }
}
    `;

/**
 * __useMpnSearchQuery__
 *
 * To run a query within a React component, call `useMpnSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMpnSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMpnSearchQuery({
 *   variables: {
 *      q: // value for 'q'
 *      country: // value for 'country'
 *      currency: // value for 'currency'
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      sortDir: // value for 'sortDir'
 *      inStockOnly: // value for 'inStockOnly'
 *      filters: // value for 'filters'
 *      distributorApi: // value for 'distributorApi'
 *      distributorApiTimeout: // value for 'distributorApiTimeout'
 *      authorizedOnly: // value for 'authorizedOnly'
 *   },
 * });
 */
export function useMpnSearchQuery(baseOptions: Apollo.QueryHookOptions<MpnSearchQuery, MpnSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MpnSearchQuery, MpnSearchQueryVariables>(MpnSearchDocument, options);
      }
export function useMpnSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MpnSearchQuery, MpnSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MpnSearchQuery, MpnSearchQueryVariables>(MpnSearchDocument, options);
        }
export type MpnSearchQueryHookResult = ReturnType<typeof useMpnSearchQuery>;
export type MpnSearchLazyQueryHookResult = ReturnType<typeof useMpnSearchLazyQuery>;
export type MpnSearchQueryResult = Apollo.QueryResult<MpnSearchQuery, MpnSearchQueryVariables>;