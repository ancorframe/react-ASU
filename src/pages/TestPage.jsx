// import { Box } from 'components/Box';
// import { Article } from 'components/Templates/Article/Article';
import { Title } from 'components/Templates/Title/Title';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import EditorJS from '@editorjs/editorjs';
import { Box } from 'components/Box';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Checklist from '@editorjs/checklist';
import ImageTool from '@editorjs/image';
import RawTool from '@editorjs/raw';
import NestedList from '@editorjs/nested-list';
import Paragraph from '@editorjs/paragraph';
// import Tooltip from 'codex.tooltip';




const text = `На бакалавраті за спеціальностю 122 “Комп’ютерні науки” проводиться
        набір на освітньо-професійну програму: “Комп’ютерні науки
        (Обчислювальний інтелект смарт-систем)”; Computer Science (Computational
        Intelligence of Smart Systems). Ліцензований обсяг бакалаврату 122
        “Комп’ютерні науки (Обчислювальний інтелект смарт-систем)” – 200 місць(У
        2021 р. на кафедру АСУ на навчання на бакалавраті за
        освітньо-професійною програмою “Комп’ютерні науки” зараховано 230
        студентів). Кваліфікація: Бакалавр із комп’ютерних наук. Форма навчання:
        денна.
        
        На бакалавраті за спеціальностю 122 “Комп’ютерні науки”
        проводиться набір на освітньо-професійну програму: “Комп’ютерні науки
        (Обчислювальний інтелект смарт-систем)”; Computer Science (Computational
        Intelligence of Smart Systems). Ліцензований обсяг бакалаврату 122
        “Комп’ютерні науки (Обчислювальний інтелект смарт-систем)” – 200 місць(У
        2021 р. на кафедру АСУ на навчання на бакалавраті за
        освітньо-професійною програмою “Комп’ютерні науки” зараховано 230
        студентів). Кваліфікація: Бакалавр із комп’ютерних наук. Форма навчання:
        денна.`;

export const TestPage = () => {
  // const tooltip = new Tooltip();

  // tooltip.show(targetElement, 'Tooltip text');

  const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: 'editorjs',
    tools: {
      header: Header,
      list: List,
      nestedList: NestedList,
       paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
  
      
      embed: Embed,
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          },
        },
      },
      raw: RawTool,
      quote: Quote,
    },
    data: {},
    // inlineToolbar: false,

    onReady: () => {
      // console.log('Editor.js is ready to work!');
    },
    onChange: (api, event) => {
      // console.log("Now I know that Editor's content changed!", event);
    },
    // defaultBlock: 'myOwnParagraph',
    autofocus: true,
    placeholder: 'Let`s write an awesome story!',
  });

  (async () => {
    try {
      await editor.isReady;
      console.log('Editor.js is ready to work!');
      /** Do anything you need after editor initialization */
    } catch (reason) {
      console.log(`Editor.js initialization failed because of ${reason}`);
    }
  })();
  const saveData = () => {
     editor
       .save()
       .then(outputData => {
         console.log('Article data: ', outputData);
       })
       .catch(error => {
         console.log('Saving failed: ', error);
       });
  }
  const onSubmit = (e) => {
    // e.preventDefault()
    editor
      .save()
      .then(outputData => {
        console.log('Article data: ', outputData);
      })
      .catch(error => {
        console.log('Saving failed: ', error);
      });
    // try {
    //   const data = await editor.save();
    //   console.log(data);
    // } catch (error) {
    //   console.log('Saving failed: ', error);
    // }
}
  return (
    <>
      <Title
        variant="h1"
        m={[0, 3, 5]}
        textAlign={[null, null, 'center']}
        pb={[0, 2, 4]}
        borderBottom={'normal'}
      >
        Title
      </Title>
      <TitleDescription textAlign={[null, null, 'center']}>
        Набір літератури та ресурсів. Тут є все, що тобі пригодиться у навчанні
        😉
      </TitleDescription>
      <Box id="editorjs" ></Box>
      <button  onClick={onSubmit}>submit</button>
    </>
  );
};
