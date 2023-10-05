import React, { useCallback } from 'react'
import ReactDropZone, { useDropzone } from 'react-dropzone'
import { useField } from 'formik'
import Alert from '../../Alert'
import './styles.scss'
import { formatBytes } from '../../../utils/files'

interface IDropZone {
  name: string
  label: string
  placeholder?: string
  icon?: string
  requiredMark?: boolean
}

const DropZone: React.FC<IDropZone> = ({ label, requiredMark = false, icon, ...props }) => {
  let [field, meta, helper] = useField(props.name)

  const inputId = `input-${props.name}`

  const hasError = meta.touched && meta.error

  const error = meta.error ? meta.error : ''

  const onDrag = (acceptedFiles: File[]) => {
    helper.setTouched(true)
    helper.setValue(acceptedFiles[0])
  }

  const value = field.value

  const onDeleteFile = (event: React.MouseEvent) => {
    event.stopPropagation()
    helper.setValue(null)
  }

  return (
    <>
      <div className="containerFormsCarreInput">
        <ReactDropZone onDrop={onDrag} multiple={false}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()} className="w-100">
              <label htmlFor="dragndrop" className="dragNdropInput">
                <input {...getInputProps()} id={inputId} />
                {isDragActive ? (
                  <>
                    <p className="dragActiveText size-large weight-black size-veryLarge pt-20 pt-20Mobile">
                      Déposer votre fichier ici 👇
                    </p>
                  </>
                ) : (
                  <>
                    <div className="dragNdropInput-icon mr-15 mr-15Mobile">
                      <img src="img/SVG/drag-drop.svg" />
                    </div>
                    <div className="dragNdropInput-content">
                      <p className="size-large weight-black">Glissez ou sélectionnez un fichier</p>
                      {!value && (
                        <>
                          <span className="dragNdropInput-cta mt-5 mt-5Mobile">
                            <i className="fc-squash-primary icon-short-arrow-next mr-10 mr-10Mobile"></i>
                            <p className="size-medium weight-medium fc-secondary-primary">Sélectionnez un fichier</p>
                          </span>
                          <p className="weight-light size-tiny fc-brownish-grey-primary mt-5  mt-5Mobile">
                            Fichiers supportés : pdf, jpg, png. Taille maximum : 2Mo
                          </p>
                        </>
                      )}
                      {value && !hasError && (
                        <div className="selectedFileContainer">
                          <span className="selectedFileName flex flex-alignCenter">
                            <i className="fc-green-STATUS-primary icon-short-check mr-5  mr-5Mobile"></i>
                            {value.name}
                          </span>
                          <span className="weight-light fc-brownish-grey-primary flex flex-alignCenter">
                            {formatBytes(value.size)}
                            <i className="fc-red-STATUS-primary icon-close ml-5" onClick={onDeleteFile}></i>
                          </span>
                        </div>
                      )}
                      {hasError && (
                        <>
                          {value && (
                            <div className="selectedFileContainer">
                              <span className="selectedFileName flex flex-alignCenter fc-red-STATUS-primary">
                                <i className="fc-red-STATUS-primary icon-short-close mr-5" onClick={onDeleteFile}></i>
                                {value.name}
                              </span>
                              <span className="weight-light fc-red-STATUS-primary flex flex-alignCenter">
                                {formatBytes(value.size)}
                              </span>
                            </div>
                          )}
                          <div
                            className={`weight-light size-small fc-brownish-grey-primary mt-10 mt-10Mobile ${
                              value ? '' : 'fc-red-STATUS-primary'
                            }`}
                          >
                            {error}
                          </div>
                          {value && (
                            <span className="dragNdropInput-cta mt-10 mt-10Mobile">
                              <i className="fc-squash-primary icon-short-arrow-next mr-10 mr-10Mobile"></i>
                              <p className="size-medium weight-medium fc-secondary-primary">
                                Sélectionnez un autre fichier
                              </p>
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </>
                )}
              </label>
              <div />
            </div>
          )}
        </ReactDropZone>
      </div>
      <label htmlFor={inputId} className="label--input mb-15 mb-15Mobile">
        {label}
        {requiredMark && <i className="fc-red-STATUS-primary"> *</i>}
      </label>
    </>
  )
}

export default DropZone
