import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { upload } from 'cms/upload';
import { Controller, useFormContext } from 'react-hook-form';

const toolbar = {
  options: [
    'inline',
    'blockType',
    'list',
    'link',
    'embedded',
    'emoji',
    'image',
    'remove',
    'history',
  ],
  blockType: {
    inDropdown: true,
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5'],
  },
  image: {
    urlEnabled: false,
    uploadEnabled: true,
    alignmentEnabled: false,
    uploadCallback: data => upload(data),
    previewImage: false,
    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    alt: { present: true, mandatory: true },
  },
};
export const TextEditor = ({ name }) => {
      const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <Editor
            editorState={value}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            // wrapperStyle={<wrapperStyleObject>}
            // editorStyle={<editorStyleObject>}
            // toolbarStyle={<toolbarStyleObject>}
            // onChange={onChange}
            onEditorStateChange={onChange}
            toolbar={toolbar}
          />
        );
      }}
    />
  );
};
