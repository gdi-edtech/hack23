import React, { useEffect, useRef, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CreateLessonForm() {
    const [value, setValue] = useState(null);
    const editorInitialized = useRef(false)
    let editorDataFake = "<h2>How To Play Piano</h2><h3>Step 1</h3><p>Get a Piano.</p><h3>Step 2</h3><p>Hit the keys.</p";
    const handleSave = (evt) => {
        console.log("handleSave");
        // Send API post
        function handleSubmit(e) {
            e.preventDefault()
            fetch("http://localhost:3000/api/replies", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(formData)
            })
            .then(resp => resp.json())
            .then(data => {
                setThreads(current => [data, ...current])
                setShowReplyForm(false)
                setFormData({
                    content: "",
                })
            });
        }
    }
useEffect(() => {
  if (!editorInitialized.current) {
    editorInitialized.current = true;
    // addEditorToDOM();
    function addEditorToDOM(){
        ClassicEditor.create(document.querySelector('#ckeditorroot'), {
             		initialData: editorDataFake? editorDataFake: '<p>Create your text lesson here.</p>'
             	})
        .then(editor => {
            if (editor){
                return;
            }
            console.log(editor);
        })
        .catch(error => {
            console.error(error);
        });
      }
  }
}, []);

    return (
        <div className='createLessonForm'>
            <label>Title:
                <input name='lessonTitle' />
            </label>
            <div id='ckeditorroot'>
                <p>CKEDITOR div will hide #ckeditorroot</p>
            </div>
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                <button className='buttons' onClick={handleSave}>Save Lesson</button>
        </div>
  )
}

export default CreateLessonForm