import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";

export default function SeachForm () {
    return (
      <Formik 
      initialValues={{
        id: "",
        // name: "",
        // number: ""
      }}
      onSubmit={() => {}}>
        <Form>
            <div>
                <Field type="text" name="" />
            </div>
        </Form>
      </Formik>
    );
  };