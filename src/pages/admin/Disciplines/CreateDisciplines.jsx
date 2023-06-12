import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
// import { useNavigate } from 'react-router-dom';
import { useCreateDisciplines } from 'cms/hooks/disciplines';
import { CourseSelect } from 'components/Templates/CreatableSelects/CourseSelect';
import { SpecialtySelect } from 'components/Templates/CreatableSelects/SpecialtySelect';

const defaultValues = {
  course: [],
  specialty: [],
  disciplines: '',
};
export const CreateDisciplines = () => {
  const methods = useForm({
    defaultValues,
  });
  const {
    // isError,
    // isLoading,
    // isSuccess,
    mutate,
  } = useCreateDisciplines();
  // const navigate = useNavigate();

  const onSubmit = data => {
    mutate(data);
    //  navigate('/admin/disciplines');
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
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
