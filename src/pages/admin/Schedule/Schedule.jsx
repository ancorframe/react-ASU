import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';

import { Box } from 'components/Box';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from 'components/Templates/Input/Input';
import {
  useDeleteSchedule,
  useScheduleDetail,
  useUpdateSchedule,
} from 'cms/hooks/schedule';
import { FieldArraySchedule } from 'cms/components/FieldArraySchedule';

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
export const Schedule = () => {
  const { id } = useParams();
  const methods = useForm({
    defaultValues,
  });
  const { data } = useScheduleDetail(id);
  console.log(data);
  const mutate = useDeleteSchedule(id);
  const update = useUpdateSchedule(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      methods.reset({
        ...data.schedule.data,
      });
    }
  }, [data, methods]);

  const onSubmit = data => {
    update.mutate(data);
  };

  const onDelete = () => {
    mutate.mutate();
    navigate('/admin/schedule');
  };

  return (
    <main>
      <SectionContent>
        <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
          <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <section>
                  <label>course</label>
                  <Input name="course" />
                </section>
                <section>
                  <label>group</label>
                  <Input name="group" />
                </section>
                <section>
                  <label>subgroup</label>
                  <Input name="subgroup" />
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
        <button type='button' onClick={onDelete}>Delete schedule</button>
      </SectionContent>
    </main>
  );
};
