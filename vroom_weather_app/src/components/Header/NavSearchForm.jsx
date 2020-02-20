import React from "react";

import GetOneDay from "../Weather_Body/OneDayApi";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Formik, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

export default function NavSearchForm() {
  return (
    <Row>
      <Formik
        initialValues={{ zipcode: "zipcode" }}
        validate={values => {
          const errors = {};
          if (!values.zipcode) {
            errors.zipcode = "Required";
          } else if (!Number.test(values.zipcode)) {
            errors.zipcode = "Must Be a 5 Digit Zipcode";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form inline>
            <Field type="number" name="zipcode" />
            <ErrorMessage name="zipcode" component="div" />
            <Button
              type="submit"
              disabled={isSubmitting}
              onSubmit={<GetOneDay />}
            >
              Get Weather
            </Button>
          </Form>
        )}
      </Formik>
    </Row>
  );
}

{
  /* <Form inline>
  <FormControl
    type="text"
    placeholder="ZipCode for Weather"
    className="mr-sm-2"
  />


</Form>; */
}
