import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage =(prpos) =>
{
    const chatProps=useMultiChatLogic(
        'REACT_APP_CHAT_ENGINE_PROJECT_ID',
        prpos.user.username,
        prpos.user.secret
    );
    return(
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:"100%"}} />
        </div>
    )
}

export default ChatsPage