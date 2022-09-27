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
 * @interface CreateServiceDocRequest
 */
export interface CreateServiceDocRequest {
    /**
     * Name of the service. Used as identifier.
     * @type {string}
     * @memberof CreateServiceDocRequest
     */
    name: string;
    /**
     * Name of the group. Used as identifier to match with group meta-data. Hierarchical groups separated by a dot, e.g. \"group.sub-group.sub-sub-group\"
     * @type {string}
     * @memberof CreateServiceDocRequest
     */
    group: string;
    /**
     * List of tags used to filter.
     * @type {Array<string>}
     * @memberof CreateServiceDocRequest
     */
    tags: Array<string>;
    /**
     * URL to code repository.
     * @type {string}
     * @memberof CreateServiceDocRequest
     */
    repository: string;
    /**
     * URL to task board.
     * @type {string}
     * @memberof CreateServiceDocRequest
     */
    taskBoard: string;
    /**
     * List of consumed API identifiers. API identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof CreateServiceDocRequest
     */
    consumedAPIs: Array<string>;
    /**
     * List of provided API identifiers. API identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof CreateServiceDocRequest
     */
    providedAPIs: Array<string>;
    /**
     * List of produced event identifiers. Event identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof CreateServiceDocRequest
     */
    producedEvents: Array<string>;
    /**
     * List of consumed event identifiers. Event identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof CreateServiceDocRequest
     */
    consumedEvents: Array<string>;
    /**
     * URL to development documentation.
     * @type {string}
     * @memberof CreateServiceDocRequest
     */
    developmentDocumentation: string;
    /**
     * URL to deployment documentation.
     * @type {string}
     * @memberof CreateServiceDocRequest
     */
    deploymentDocumentation: string;
    /**
     * URL to API documentation.
     * @type {string}
     * @memberof CreateServiceDocRequest
     */
    apiDocumentation: string;
    /**
     * Responsible team identifier. Used for matching multiple services to teams
     * @type {string}
     * @memberof CreateServiceDocRequest
     */
    responsibleTeam: string;
    /**
     * List of responsible person identifiers.
     * @type {Array<string>}
     * @memberof CreateServiceDocRequest
     */
    responsibles: Array<string>;
}
