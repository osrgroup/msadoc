// tslint:disable
/**
 * msdoc server API
 * The msdoc server API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface CreateServiceDocResponse
 */
export interface CreateServiceDocResponse {
    /**
     * Name of the service. Used as identifier.
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    name: string;
    /**
     * Name of the group. Used as identifier to match with group meta-data. Hierarchical groups separated by a dot, e.g. \"group.sub-group.sub-sub-group\"
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    group?: string;
    /**
     * List of tags used to filter.
     * @type {Array<string>}
     * @memberof CreateServiceDocResponse
     */
    tags?: Array<string>;
    /**
     * URL to code repository.
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    repository?: string;
    /**
     * URL to task board.
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    taskBoard?: string;
    /**
     * List of consumed API identifiers. API identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof CreateServiceDocResponse
     */
    consumedAPIs?: Array<string>;
    /**
     * List of provided API identifiers. API identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof CreateServiceDocResponse
     */
    providedAPIs?: Array<string>;
    /**
     * List of produced event identifiers. Event identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof CreateServiceDocResponse
     */
    publishedEvents?: Array<string>;
    /**
     * List of consumed event identifiers. Event identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof CreateServiceDocResponse
     */
    subscribedEvents?: Array<string>;
    /**
     * URL to development documentation.
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    developmentDocumentation?: string;
    /**
     * URL to deployment documentation.
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    deploymentDocumentation?: string;
    /**
     * URL to API documentation.
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    apiDocumentation?: string;
    /**
     * Responsible team identifier. Used for matching multiple services to teams
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    responsibleTeam?: string;
    /**
     * List of responsible person identifiers.
     * @type {Array<string>}
     * @memberof CreateServiceDocResponse
     */
    responsibles?: Array<string>;
    /**
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    creationTimestamp: string;
    /**
     * @type {string}
     * @memberof CreateServiceDocResponse
     */
    updateTimestamp: string;
}
