import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
} from '@chakra-ui/core'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { Card } from './Card'

const LoginSchema = Yup.object().shape({
  stdid: Yup.string().required(
    'โปรดกรอกเลขประจำตัวนักเรียน หรือ เลขที่นั่งสอบ'
  ),
})

export const Login = ({ setData }) => {
  const [fetchError, setFetchError] = useState('')

  return (
    <Card>
      <Heading size="md">ประกาศห้องเรียน</Heading>
      <Box mt={2} fontFamily="heading">
        <Formik
          initialValues={{ stdid: '' }}
          validationSchema={LoginSchema}
          onSubmit={async (values, actions) => {
            let data: any
            console.log(values)
            actions.setSubmitting(true)
            try {
              const res = await fetch(
                `https://api.room.triamudom.ac.th/student/${values.stdid}`
              )

              data = await res.json()
            } catch (_) {
              setFetchError('An error occured')
            }

            if (data.message !== 'invalid') {
              setData(data)
            } else {
              setFetchError('ไม่พบเลขประจำตัวนักเรียน หรือเลขที่นั่งสอบ')
            }

            actions.setSubmitting(false)
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Field name="stdid">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.id && form.touched.id}>
                    <FormLabel htmlFor="id">
                      เลขประจำตัวนักเรียน / เลขที่นั่งสอบ
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        children={<Icon name="edit" color="gray.300" />}
                      />
                      <Input {...field} id="id" />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.id}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                mt={4}
                variantColor="teal"
                isLoading={props.isSubmitting}
                type="submit"
                width="100%"
                fontFamily="heading"
              >
                ค้นหา
              </Button>
            </form>
          )}
        </Formik>
        <Text color="red.500" mt={4}>
          {fetchError}
        </Text>
      </Box>
    </Card>
  )
}
