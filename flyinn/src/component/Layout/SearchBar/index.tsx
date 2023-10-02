import React from 'react'
import SearchForm, { ISearchFields, ICategoryOption } from '@components/Forms/SearchForm'
import { Formik, FormikProps } from 'formik'

interface ISearchBar {
  categoryPlaceholder: string
  categoryOptions: ICategoryOption[]
  onSubmit: (values: ISearchFields) => void
  initialValues: ISearchFields
}

const SearchBar: React.FC<ISearchBar> = ({ onSubmit, categoryOptions, categoryPlaceholder, initialValues }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps: FormikProps<ISearchFields>) => (
        <SearchForm categoryPlaceholder={categoryPlaceholder} categoryOptions={categoryOptions} {...formikProps} />
      )}
    </Formik>
  )
}

export default SearchBar
