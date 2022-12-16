import { GetServiceDocResponse } from 'msadoc-client';

const allServiceDocs: GetServiceDocResponse[] = [
  {
    name: 'WebClient',
    group: 'clients',
    tags: ['app=ods'],
    repository: 'https://github.com/jvalue/ods.git',
    taskBoard: 'https://github.com/jvalue/ods/projects',
    consumedAPIs: [
      '/extractions/config',
      '/extractions/execution-stats',
      '/transformation/configs',
      '/transformation/execution-stats',
      '/load/configs',
      '/load/execution-stats',
      '/notifications/configs',
      '/notifications/execution-stats',
      '/query/graphql',
      '/query/restful',
    ],
    deploymentDocumentation: 'https://github.com/jvalue/ods/tree/main/deployment',
    responsibles: ['schwarz@group.riehle.org'],
    responsibleTeam: 'jvalue-core',
    creationTimestamp: '2022-11-24T09:35:06.358Z',
    updateTimestamp: '2022-11-24T09:35:06.358Z',
  },
  {
    name: 'ExtractionService',
    group: 'etl',
    tags: ['app=ods'],
    repository: 'https://github.com/jvalue/ods.git',
    taskBoard: 'https://github.com/jvalue/ods/projects',
    providedAPIs: ['/extractions/config', '/extractions/execution-stats'],
    subscribedEvents: ['extraction.execution.triggered'],
    publishedEvents: [
      'extraction.config.created',
      'extraction.config.updated',
      'extraction.config.deleted',
      'extraction.execution.success',
      'extraction.execution.failure',
    ],
    deploymentDocumentation: 'https://github.com/jvalue/ods/tree/main/deployment',
    responsibles: ['schwarz@group.riehle.org'],
    responsibleTeam: 'jvalue-core',
    creationTimestamp: '2022-11-24T09:35:07.278Z',
    updateTimestamp: '2022-11-24T09:35:07.278Z',
  },
  {
    name: 'SchedulerService',
    group: 'etl.extraction',
    tags: ['app=ods'],
    repository: 'https://github.com/jvalue/ods.git',
    taskBoard: 'https://github.com/jvalue/ods/projects',
    providedAPIs: ['/scheduler/tasks'],
    subscribedEvents: [
      'extraction.config.created',
      'extraction.config.updated',
      'extraction.config.deleted',
    ],
    publishedEvents: ['extraction.execution.tiggered'],
    developmentDocumentation:
      'https://github.com/jvalue/ods/blob/main/scheduler/README.md',
    deploymentDocumentation: 'https://github.com/jvalue/ods/tree/main/deployment',
    responsibles: ['schwarz@group.riehle.org'],
    responsibleTeam: 'jvalue-core',
    creationTimestamp: '2022-11-24T09:35:08.798Z',
    updateTimestamp: '2022-11-24T09:35:08.798Z',
  },
  {
    name: 'TransformationService',
    group: 'etl',
    tags: ['app=ods'],
    repository: 'https://github.com/jvalue/ods.git',
    taskBoard: 'https://github.com/jvalue/ods/projects',
    providedAPIs: [
      '/transformation/configs',
      '/transformation/execution-stats',
    ],
    subscribedEvents: [
      'extraction.config.created',
      'extraction.config.updated',
      'extraction.config.deleted',
      'extraction.execution.success',
      'extraction.execution.failure',
    ],
    publishedEvents: [
      'transformation.execution.success',
      'transformation.execution.failure',
      'transformation.config.created',
      'transformation.config.updated',
      'transformation.config.deleted',
    ],
    developmentDocumentation:
      'https://github.com/jvalue/ods/blob/main/transformation/README.md',
    deploymentDocumentation: 'https://github.com/jvalue/ods/tree/main/deployment',
    responsibles: ['schwarz@group.riehle.org'],
    responsibleTeam: 'jvalue-core',
    creationTimestamp: '2022-11-24T09:35:10.529Z',
    updateTimestamp: '2022-11-24T09:35:10.529Z',
  },
  {
    name: 'LoadService',
    group: 'etl.load',
    tags: ['app=ods'],
    repository: 'https://github.com/jvalue/ods.git',
    taskBoard: 'https://github.com/jvalue/ods/projects',
    providedAPIs: ['/load/configs', '/load/execution-stats'],
    subscribedEvents: [
      'transformation.config.created',
      'transformation.config.updated',
      'transformation.config.deleted',
      'transformation.execution.success',
      'transformation.execution.failure',
    ],
    publishedEvents: [
      'load.config.created',
      'load.config.updated',
      'load.config.deleted',
      'load.execution.success',
      'load.execution.failure',
    ],
    deploymentDocumentation: 'https://github.com/jvalue/ods/tree/main/deployment',
    responsibles: ['schwarz@group.riehle.org'],
    responsibleTeam: 'jvalue-core',
    creationTimestamp: '2022-11-24T09:35:12.085Z',
    updateTimestamp: '2022-11-24T09:35:12.085Z',
  },
  {
    name: 'NotificationService',
    tags: ['app=ods'],
    repository: 'https://github.com/jvalue/ods.git',
    taskBoard: 'https://github.com/jvalue/ods/projects',
    providedAPIs: ['/notifications/configs', '/notifications/execution-stats'],
    subscribedEvents: ['load.execution.success', 'load.execution.failure'],
    publishedEvents: [
      'notification.config.created',
      'notification.config.updated',
      'notification.config.deleted',
      'notification.execution.success',
      'notification.execution.failure',
    ],
    deploymentDocumentation: 'https://github.com/jvalue/ods/tree/main/deployment',
    responsibles: ['schwarz@group.riehle.org'],
    responsibleTeam: 'jvalue-core',
    creationTimestamp: '2022-11-24T09:35:13.313Z',
    updateTimestamp: '2022-11-24T09:35:13.313Z',
  },
  {
    name: 'RestfulQueryService',
    group: 'etl.load.query',
    tags: ['app=ods'],
    repository: 'https://github.com/jvalue/ods.git',
    taskBoard: 'https://github.com/jvalue/ods/projects',
    providedAPIs: ['/query/restful'],
    subscribedEvents: [
      'loading.config.created',
      'loading.config.updated',
      'loading.config.deleted',
      'loading.execution.success',
      'loading.execution.failure',
    ],
    deploymentDocumentation: 'https://github.com/jvalue/ods/tree/main/deployment',
    responsibles: ['schwarz@group.riehle.org'],
    responsibleTeam: 'jvalue-core',
    creationTimestamp: '2022-11-24T09:35:14.820Z',
    updateTimestamp: '2022-11-24T09:35:14.820Z',
  },
  {
    name: 'GraphQlQueryService',
    group: 'etl.load.query',
    tags: ['app=ods'],
    repository: 'https://github.com/jvalue/ods.git',
    taskBoard: 'https://github.com/jvalue/ods/projects',
    providedAPIs: ['/query/graphql'],
    subscribedEvents: [
      'loading.config.created',
      'loading.config.updated',
      'loading.config.deleted',
      'loading.execution.success',
      'loading.execution.failure',
    ],
    deploymentDocumentation: 'https://github.com/jvalue/ods/tree/main/deployment',
    responsibles: ['schwarz@group.riehle.org'],
    responsibleTeam: 'jvalue-core',
    creationTimestamp: '2022-11-24T09:35:16.446Z',
    updateTimestamp: '2022-11-24T09:35:16.446Z',
  },
];

export const ServiceDocsMockData = {
  allServiceDocs: allServiceDocs,
};
