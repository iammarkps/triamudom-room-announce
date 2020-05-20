import React from 'react'
import { Box, Heading, Text, Button, Link } from '@chakra-ui/core'

import { Card } from './Card'

export const Data = ({ setData, user }) => {
  return (
    <Card>
      <Heading size="xl">ข้อมูลนักเรียน</Heading>
      <Box mt={2} fontSize="lg">
        <Text>
          <Box as="span" fontWeight="bold">
            เลขประจำตัว:{' '}
          </Box>
          {user.ID}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ชื่อ:{' '}
          </Box>
          {user.Name}
        </Text>

        <Text>
          <Box as="span" fontWeight="bold">
            ชั้น:{' '}
          </Box>
          {user.Level}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ห้อง:{' '}
          </Box>
          {user.Room}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            เลขที่:{' '}
          </Box>
          {user.Number}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            แผนการเรียน:{' '}
          </Box>
          {user.Plan}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ครูที่ปรึกษาท่านที่ 1:{' '}
          </Box>
          {user.Advisor1}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ครูที่ปรึกษาท่านที่ 2:{' '}
          </Box>
          {user.Advisor2}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ลิงก์เข้ากลุ่มไลน์:{' '}
          </Box>
          <Link isExternal href={user.RegLink} color="teal.600">
            {user.RegLink}
          </Link>
        </Text>
      </Box>
      <Button
        onClick={() => setData({})}
        mt={4}
        fontFamily="heading"
        variantColor="teal"
      >
        ย้อนกลับ
      </Button>
    </Card>
  )
}
