import React from 'react';
import { Controller } from 'react-hook-form';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export default function EditorArea({ control, inputName }) {
  return (
    <>
      <Controller
        control={control}
        name={inputName}
        render={({ field: { onChange, value, name } }) => (
          <>
            <CKEditor
              editor={ClassicEditor}
              data={value}
              name={name}
              onChange={(event, editor) => {
                onChange(editor.getData());
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </>
        )}
      />
    </>
  );
}
