import loadable from '@loadable/component';
import React from 'react';

const Loading = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

export const createLazyComponent = (
  factory: () => Promise<{ default: React.ComponentType<any> }>,
  options = {}
) => {
  return loadable(factory, {
    fallback: <Loading />,
    ...options
  });
};