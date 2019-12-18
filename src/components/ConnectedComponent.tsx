import * as React from 'react';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { IApplicationState, IFormDemo, LoadFormDemoActionCreator } from 'redux-store';
import { ThunkDispatch } from 'redux-thunk';
import { useEffect } from 'react';

interface ConnectedComponentProps {
  formDemo: IFormDemo
  loadProducts: () => void
}
const ConnectedComponent: React.FC<ConnectedComponentProps> = ({ formDemo, loadProducts }) => {
  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <>
      <span>{formDemo.engagementId}</span>
    </>
  )
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    formDemo: state.formDemoState.formDemo
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IFormDemo, undefined, AnyAction>) => {
  return {
    loadProducts: () => dispatch(LoadFormDemoActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent)
