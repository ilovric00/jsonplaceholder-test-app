import React from 'react';

interface LoggerContextValues {
  message: string;
}

const LoggerContext = React.createContext<LoggerContextValues>({
  message: '',
});

export const useLogger = () => React.useContext(LoggerContext);
export const LoggerContextProvider = LoggerContext.Provider;
export const LoggerContextConsumer = LoggerContext.Consumer;
