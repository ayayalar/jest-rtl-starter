import thunk, { ThunkAction } from 'redux-thunk';
import { getFormData } from 'api-mock';
import {
  Action,
  ActionCreator,
  //AnyAction,
  Reducer,
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
  Dispatch
} from 'redux'
export interface IFormDemo {
  engagementId: string
  tpid: string
  customerName: string
  partner: string
  requestTitle: string
  region: { key: string; value: string }[]
  area: string
  engagementDescription: string
  primaryTechnology: string
  additionalTechnology: string
  technologyDescription: string
  expectedStartDate: Date
  engagementDuration: string
  deliveryMethod: string
  additionalLocationDetails: string
}

export interface IRegions {
  regions: { key: string; value: string }[]
}

export interface IFormDemoState {
  formDemo: IFormDemo
}

export interface IRegionsState {
  regions: IRegions
}

export interface IApplicationState {
  formDemoState: IFormDemoState
  regionsState: IRegionsState
}

export interface ILoadFormDemoAction extends Action<'LoadFormDemo'> {
  formDemo: IFormDemo
}

export interface ILoadRegionsAction extends Action<'LoadRegions'> {
  regions: { key: string; value: string }[]
}

export const LoadFormDemoActionCreator: ActionCreator<ThunkAction<
  Promise<ILoadFormDemoAction>,
  IFormDemo,
  undefined,
  ILoadFormDemoAction
>> = () => {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: 'LoadFormDemo',
      formDemo: await getFormData()
    } as ILoadFormDemoAction)
  }
}

export const LoadRegionsActionCreator: ActionCreator<ThunkAction<
  Promise<ILoadRegionsAction>,
  IRegions,
  undefined,
  ILoadRegionsAction
>> = () => {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: 'LoadRegions',
      regions: await Promise.resolve([{ key: '', value: '' }])
    } as ILoadRegionsAction)
  }
}

export const LoadProfileReducer: Reducer<IFormDemoState, ILoadFormDemoAction> = (
  state: IFormDemoState = { formDemo: {} as IFormDemo },
  action: ILoadFormDemoAction
) => {
  switch (action.type) {
    case 'LoadFormDemo':
      return {
        ...state,
        formDemo: action.formDemo
      }
    default:
      return { formDemo: {} as IFormDemo }
  }
}

export const LoadRegionsReducer: Reducer<IRegionsState, ILoadRegionsAction> = (
  state: IRegionsState = { regions: { regions: [] } as IRegions },
  action: ILoadRegionsAction
) => {
  switch (action.type) {
    case 'LoadRegions':
      return {
        ...state,
        regions: { regions: action.regions }
      }
    default:
      return { regions: { regions: [] } as IRegions }
  }
}

export const rootReducer = combineReducers<IApplicationState>({
  formDemoState: LoadProfileReducer,
  regionsState: LoadRegionsReducer
})

export const configureStore = () => {
  // @ts-ignore
  // prettier-ignore
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(rootReducer, undefined, composeEnhancer(applyMiddleware(thunk)))
}
