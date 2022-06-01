import React, {useContext} from "react"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/snippets/javascript"
import "ace-builds/src-min-noconflict/ext-language_tools"
import { EditorContext } from "../../context/context"

const JsEditor = () => {

    const { js, setJs } = useContext(EditorContext)

    return (
        <AceEditor 
            placeholder="Write your JS codes here!"
            mode="javascript"
            theme="monokai"
            name="editor_js"
            value={js}
            onChange={value => setJs(value)}
            fontSize='16'
            width={'100%'}
            height={'100%'}
            showPrintMargin={false}
            showGutter={false}
            hightlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 2
            }}
        />
    )
}


export default JsEditor