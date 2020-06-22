import React, { useContext } from 'react';

import ComponentC from '../ComponentC';
import { userContext, channelContext } from '../../App';

function ComponentB() {

    const user = useContext(userContext);
    const role = useContext(channelContext);

    return (
        <div>
            {user} -- {role}
        </div>
    )
}

export default ComponentB;
