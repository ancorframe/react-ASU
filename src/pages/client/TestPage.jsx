import React from 'react';
// import {
//   EditorState,
//   // convertToRaw, ContentState
// } from 'draft-js';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import rrulePlugin from '@fullcalendar/rrule';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import { useState } from 'react';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { domToReact } from 'html-react-parser';
import { Title } from 'components/Templates/Title/Title';
import { Article } from 'components/Templates/Article/Article';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
// import {
//   // FormProvider,
//   useForm
// } from 'react-hook-form';
// import { Introduction } from 'pages/admin/Entrants';
// import { InputFile } from 'cms/components/InputFile';
// import { TextEditor } from 'cms/components/TextEditor';
// import { Input } from 'components/Templates/Input/Input';
// import axios from 'axios';
// import { FieldArray } from 'cms/components/FieldArray';
// import { FieldArrayPartnership } from 'cms/components/FieldArrayPartnership';
import Skeleton from 'react-loading-skeleton';
import { Box } from 'components/Box';

import 'react-loading-skeleton/dist/skeleton.css';

// const content = '';
// const contentBlock = htmlToDraft(content);
// const defaultValues = {
//   title: '',
//   image: '',
//   content: [
//     {
//       title: '',
//       url: '',
//       image: '',
//       logo: '',
//       content: EditorState.createEmpty(),
//     },
//   ],
// };
export const TestPage = () => {
  // const [defaultValues, setDefaultValues] = useState(initialState);
  // const methods = useForm({ defaultValues });
  // const defaultValues = {
  //   content: content
  //     ? EditorState.createWithContent(
  //         ContentState.createFromBlockArray(contentBlock.contentBlocks)
  //       )
  //     : EditorState.createEmpty(),
  //   title: 'wefqweferfer',
  //   image: 'wergwergwerg',
  // };

  // const onSubmit = async data => {
  //   console.log(data);
    // const convertedData = {
    //   ...data,
    //   content: draftToHtml(convertToRaw(data.content.getCurrentContent())),
    // };
    // const formData = new FormData();
  //   for (const key in convertedData) {
  //     formData.append(key, convertedData[key]);
  //   }
  //   try {
  //     console.log(formData);
  //     const response = await axios.post(
  //       'http://localhost:6633/api/upload',
  //       formData,
  //       {
  //         headers: { 'content-type': 'multipart/form-data' },
  //       }
  //     );

  //     // return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const options = {
    replace: el => {
      switch (el.name) {
        case 'h1':
          return (
            <Title variant="h1" pb={[2, 6]} mb={8} borderBottom={'titles'}>
              {domToReact(el.children, options)}
            </Title>
          );
        case 'h2':
          return (
            <Title variant="h2" pb={[2, 6]} mb={8} borderBottom={'titles'}>
              {domToReact(el.children, options)}
            </Title>
          );
        case 'h3':
          return (
            <Title variant="h3" pb={[2, 6]} mb={8} borderBottom={'titles'}>
              {domToReact(el.children, options)}
            </Title>
          );
        case 'h4':
          return (
            <Title variant="h4" pb={[2, 6]} mb={8} borderBottom={'titles'}>
              {domToReact(el.children, options)}
            </Title>
          );
        case 'h5':
          return (
            <Title variant="h5" pb={[2, 6]} mb={8} borderBottom={'titles'}>
              {domToReact(el.children, options)}
            </Title>
          );
        case 'p':
          return <Article>{domToReact(el.children, options)}</Article>;
        case 'img':
          return <ContentImg src={el.attribs.src} alt={el.attribs.alt} />;
        default:
          break;
      }
    },
  };


  return (
    <>
      <Box height='100px' width='400px' bg='black' position='relative'>
        <Skeleton height={20} width={'100%' } />
      </Box >
    </>
  );
};



