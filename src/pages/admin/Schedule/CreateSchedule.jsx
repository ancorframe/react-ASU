import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { useNavigate } from 'react-router-dom';
import { useCreateSchedule } from 'cms/hooks/schedule';
import { FieldArraySchedule } from 'cms/components/FieldArraySchedule';
import { CourseSelect } from 'components/Templates/CreatableSelects/CourseSelect';
import { GroupSelect } from 'components/Templates/CreatableSelects/GroupSelect';
import { SubgroupSelect } from 'components/Templates/CreatableSelects/SubgroupSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { scheduleSchema } from 'cms/validationSchemas/scheduleSchemas';

const defaultValues = {
  course: '',
  group: '',
  subgroup: '',
  mon: [
    {
      time: '',
      tag: '',
      teacher: '',
      discipline: '',
    },
  ],
  tue: [
    {
      time: '',
      tag: '',
      teacher: '',
      discipline: '',
    },
  ],
  wed: [
    {
      time: '',
      tag: '',
      teacher: '',
      discipline: '',
    },
  ],
  thu: [
    {
      time: '',
      tag: '',
      teacher: '',
      discipline: '',
    },
  ],
  fri: [
    {
      time: '',
      tag: '',
      teacher: '',
      discipline: '',
    },
  ],
};
export const CreateSchedule = () => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(scheduleSchema),
  });
  const create = useCreateSchedule();
  const navigate = useNavigate();

  const onSubmit = data => {
    create.mutate(data);
    navigate('/admin/schedule');
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
                  <CourseSelect name="course" />
                </section>
                <section>
                  <label>group</label>
                  <GroupSelect name="group" />
                </section>
                <section>
                  <label>subgroup</label>
                  <SubgroupSelect name="subgroup" />
                </section>
                <section>
                  <label>mon</label>
                  <FieldArraySchedule name="mon" />
                </section>
                <section>
                  <label>tue</label>
                  <FieldArraySchedule name="tue" />
                </section>
                <section>
                  <label>wed</label>
                  <FieldArraySchedule name="wed" />
                </section>
                <section>
                  <label>thu</label>
                  <FieldArraySchedule name="thu" />
                </section>
                <section>
                  <label>fri</label>
                  <FieldArraySchedule name="fri" />
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
