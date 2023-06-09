import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { useEffect } from 'react';
import {
  useNavigate,
  useParams
} from 'react-router-dom';
import { Input } from 'components/Templates/Input/Input';
import {
  useDeleteDisciplines,
  useDisciplinesDetail,
  useUpdateDisciplines,
} from 'cms/hooks/disciplines';
import { CourseSelect } from 'components/Templates/CreatableSelects/CourseSelect';
import { SpecialtySelect } from 'components/Templates/CreatableSelects/SpecialtySelect';

const defaultValues = {
  course: [],
  specialty: [],
  disciplines: '',
};
export const Disciplines = () => {
  const { id } = useParams();
  const methods = useForm({
    defaultValues,
  });
  const { data } = useDisciplinesDetail(id);
  const mutate = useDeleteDisciplines(id);
  const update = useUpdateDisciplines(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      methods.reset({
        ...data.disciplines.data,
      });
    }
  }, [data, methods]);

  const onSubmit = data => {
    update.mutate(data);
  };

  const onDelete = () => {
    mutate.mutate();
    navigate('/admin/disciplines');
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
                  <label>course</label>
                  <CourseSelect isMulti name="course" />
                </section>
                <section>
                  <label>specialty</label>
                  <SpecialtySelect isMulti name="specialty" />
                </section>
                <section>
                  <label>disciplines</label>
                  <Input name="disciplines" />
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
