import React from 'react';

import { userContext, channelContext } from '../App';

function ComponentC() {
    return (
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return (
                            <channelContext.Consumer>
                                {channel => {
                                    return (
                                        <div>
                                            user Context Value ----- {user} , user Role is {channel}
                                        </div>
                                    )
                                }
                                }
                            </channelContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC;
