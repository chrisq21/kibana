/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export { createSavedSearchesLoader } from '../../../../src/plugins/discover/public';
export { XJsonMode } from '../../es_ui_shared/console_lang/ace/modes/x_json';
export {
  collapseLiteralStrings,
  expandLiteralStrings,
} from '../../../../src/plugins/es_ui_shared/console_lang/lib';

export {
  SendRequestConfig,
  SendRequestResponse,
  UseRequestConfig,
  sendRequest,
  useRequest,
} from '../../../../src/plugins/es_ui_shared/public/request/np_ready_request';

export {
  CronEditor,
  DAY,
} from '../../../../src/plugins/es_ui_shared/public/components/cron_editor';

// Custom version of EuiInMemoryTable with TypeScript
// support and a fix for updating sorting props.
export {
  ActionsColumnType,
  ComputedColumnType,
  ExpanderColumnType,
  FieldDataColumnType,
  ColumnType,
  mlInMemoryTableBasicFactory,
  OnTableChangeArg,
  SortingPropType,
  SortDirection,
  SORT_DIRECTION,
} from '../../../legacy/plugins/ml/public/application/components/ml_in_memory_table';

// Needs to be imported because we're reusing KqlFilterBar which depends on it.
export { setDependencyCache } from '../../../legacy/plugins/ml/public/application/util/dependency_cache';

// @ts-ignore: could not find declaration file for module
export { KqlFilterBar } from '../../../legacy/plugins/ml/public/application/components/kql_filter_bar';
