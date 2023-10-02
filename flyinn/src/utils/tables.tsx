import { formatDate } from './string'
import React from 'react'
import {getContractPdfDownloadLink, statuses, contractType, cancelContract, contactsStatuses} from '@services/navicar'
import Button from '@components/Buttons/Button'
import { useStore } from '@stores/index'


export const renderDateCell = (withTime = false) => ({ cell }: any) => {
  return <>{cell.value && formatDate(cell.value, withTime)}</>
}

export const renderContractIdCell = ({ cell: { value } }: any) => {
  const link = getContractPdfDownloadLink(value)

  return (
    <a href={link} target="_blank">
      <div className="flex flex-alignCenter">
        <img src="/img/SVG/pdf-icon.svg" className="mr-5 mr-5Mobile" style={{ width: 20, height: 20 }} />
        {value}
      </div>
    </a>
  )
}

export const renderNumberCell = ({ cell: { value } }: any) => {
  return typeof value === 'number' ? value.toLocaleString('fr-FR') : value
}

export const colors: any = {
  [contactsStatuses.OPEN]: {
    text: 'ouvert',
    color: "status text-yellow-400"
  },
  [contactsStatuses.LOCKED]: {
    text: 'verouillé',
    color: "status text-red-500"
  },
  [contactsStatuses.FINISHED]: {
    text: 'terminé',
    color: "status text-green-500"
  }
}

export const renderButtonOrStatus = (value) => {

  const {contracts: contractStore} = useStore();
  if (value.contractType == contractType.IMAT && parseInt(value.outstandingQuantity) > 0) {
    return (
      <button className='flex border-solid border border-red-800 rounded-lg text-red-800 px-1 py-1 text-sm'>Fixer mon matif</button>
    )
  }
  if (value.contractType == contractType.MAD && value.status == contactsStatuses.OPEN) {
    return (
      <Button className='px-2 py-2 text-large' onClick={() => contractStore.cancelContract(value.id)} >Supprimer</Button>
    )
  }
  if (value.contractType == contractType.SECU) {
    return (
      <Button className='px-2 py-2 text-large' >Exercer mon option</Button>
    )
  }

  return (
    <p className={colors[value.status].color}>{colors[value.status].text}</p>
  )
}
