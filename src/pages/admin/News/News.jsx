import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { FormProvider, useForm } from 'react-hook-form';
import { TextEditor } from '../../../cms/components/TextEditor';
import { Box } from 'components/Box';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteNews, useNewsDetail, useUpdateNews } from 'cms/hooks/news';
import { InputFile } from 'cms/components/InputFile';
import { DatePicker } from 'cms/components/DatePicker';
import { Input } from 'components/Templates/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { newsSchema } from 'cms/validationSchemas/newsSchemas';

const defaultValues = {
  title: '',
  image: '',
  date: new Date(),
  content: EditorState.createEmpty(),
};
export const News = () => {
  const { id } = useParams();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(newsSchema),
  });
  const { data } = useNewsDetail(id);
  const mutate = useDeleteNews(id);
  const update = useUpdateNews(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const news = {
        ...data.news.data,
        date: new Date(data.news.data.date),
        content: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(data.news.data.content).contentBlocks
          )
        ),
      };
      methods.reset({
        ...news,
      });
    }
  }, [data, methods]);

  const onSubmit = data => {
    const convertedData = {
      ...data,
      content: draftToHtml(convertToRaw(data.content.getCurrentContent())),
    };

    const formData = new FormData();
    for (const key in convertedData) {
      formData.append(key, convertedData[key]);
    }

    if (convertedData.content.length <= 30) {
      methods.setError('content', {
        type: 'custom',
        message: 'Content must be more than 30 characters long',
      });
      return;
    }

    update.mutate(formData);
  };

  const onDelete = () => {
    mutate.mutate();
    navigate('/admin/news');
  };

  return (
    <main>
      <SectionContent>
        <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
          <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <section>
                  <label>title</label>
                  <Input name="title" />
                </section>
                <section>
                  <label>image</label>

                  <InputFile name="image" />
                </section>
                <section>
                  <label>date</label>

                  <DatePicker name="date" />
                </section>

                <section>
                  <label>DraftJS</label>
                  <TextEditor name="content" />
                </section>

                <button type="submit">submit</button>
              </form>
            </FormProvider>
            <button type="button" onClick={onDelete}>
              delete
            </button>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
