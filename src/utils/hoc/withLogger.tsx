import React, { ComponentType, useEffect } from 'react';
import Logger from 'utils/static/Logger';

import { useLogger } from 'utils/context/LoggerContext';

const withLogger =
  <P extends object>(Component: ComponentType<P>): React.FC<P> =>
  ({ ...props }) => {
    const { message } = useLogger();

    // The displayName string is used in debugging messages when running the app locally.
    const getComponentName = () => Component.displayName || Component.name || 'Component';

    useEffect(() => {
      Logger.message(message, getComponentName());
    }, [message]);

    return <Component {...(props as P)} />;
  };

export default withLogger;
