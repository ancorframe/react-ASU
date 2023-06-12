import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from 'components/Templates/Input/Input';
import {
  useDeleteLiterature,
  useLiteratureDetail,
  useUpdateLiterature,
} from 'cms/hooks/literature';
import { InputFile } from 'cms/components/InputFile';
import { SpecialtySelect } from 'components/Templates/CreatableSelects/SpecialtySelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { literatureSchema } from 'cms/validationSchemas/literatureSchemas';

const defaultValues = {
  title: '',
  image: '',
  author: '',
  specialty: [],
  url: '',
};

export const Literature = () => {
  const { id } = useParams();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(literatureSchema),
  });
  const { data } = useLiteratureDetail(id);
  const mutate = useDeleteLiterature(id);
  const update = useUpdateLiterature(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      methods.reset({
        ...data.literature.data,
      });
    }
  }, [data, methods]);

  const onSubmit = data => {
    const newData = { ...data, specialty: JSON.stringify(data.specialty) };
    const formData = new FormData();
    for (const key in newData) {
      formData.append(key, newData[key]);
    }
    update.mutate(formData);
  };

  const onDelete = () => {
    mutate.mutate();
    navigate('/admin/literature');
  };

  const checkKeyDown = e => {
    if (e.key === 'Enter') e.preventDefault();
  };

  return (
    <main>
      <SectionContent>
        <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
          <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                onKeyDown={e => checkKeyDown(e)}
              >
                <section>
                  <label>title</label>
                  <Input name="title" />
                </section>
                <section>
                  <label>specialty</label>
                  <SpecialtySelect isMulti name="specialty" />
                </section>
                <section>
                  <label>author</label>
                  <Input name="author" />
                </section>
                <section>
                  <label>url</label>
                  <Input name="url" />
                </section>
                <section>
                  <label>image</label>
                  <InputFile name="image" />
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
