import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@stores/index'
import { useHistory, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import useCheckToken from '@hooks/useCheckToken'
import routes, { outdatedAnnualUpdateAllowedRoutes } from '@routes'
import useModal from '@hooks/useModal'
import Modal from '@components/Modal'
import { CartStore } from '@stores/cart/store'

interface IAuthWrapper {
  children: React.ReactNode
}

const AuthWrapper: React.FC<IAuthWrapper> = observer(({ children }) => {
  const { login: loginStore, accounts: accountsStore, cart: cartStore } = useStore()

  const needAnnualUpdate = loginStore.needAnnualUpdate
  const { needChangePassword } = accountsStore

  const onTokenExpiration = () => {
    toast.error('Votre session a expirée, veuillez vous reconnecter')
    accountsStore.clearSelectedAccount()
  }

  const history = useHistory()
  const location = useLocation()

  useCheckToken(onTokenExpiration)

  useEffect(() => {
    loginStore.refreshContact()
    cartStore.getCart()

  }, [location])

  useEffect(() => {
    /*console.log("AuthWrapper::", needChangePassword, needAnnualUpdate, location.pathname, routes.PROFILE, needAnnualUpdate &&
        !outdatedAnnualUpdateAllowedRoutes.includes(location.pathname) &&
        !annualUpdateModalActive)*/
    if (needChangePassword && location.pathname !== routes.PROFILE) {
      redirectToProfile()
    }
    if (needChangePassword && location.pathname === routes.PROFILE) {
      toast.error(
        'Afin de respecter les lois informatique et liberté, vous devez modifier votre mot passe. Celui-ci doit comporter au moins une majuscule, un chiffre et l’un des caractères suivants : !, #,  -, _ ,€, @'
      )
      return
    } else if (
      needAnnualUpdate &&
      !outdatedAnnualUpdateAllowedRoutes.includes(location.pathname) &&
      !annualUpdateModalActive
    ) {
      toggleAnnualUpdateModal()
    }
  }, [needChangePassword, needAnnualUpdate, location])

  const { toggle: toggleAnnualUpdateModal, active: annualUpdateModalActive } = useModal()

  const redirectToAnnualUpdate = () => {
    history.push(routes.ANNUAL_UPDATE)
  }

  const redirectToProfile = () => {
    history.push(routes.PROFILE)
  }

  return (
    <>
      {children}
      <Modal
        active={annualUpdateModalActive}
        toggle={toggleAnnualUpdateModal}
        bodyClassName="pl-50 pr-50 pl-50Mobile pr-50Mobile"
        onClose={redirectToAnnualUpdate}
        buttonText="Mettre à jour"
      >
        <img src="/img/SVG/modals/maj-ko.svg" />
        <p className="text-center weight-medium size-medium fc-red-STATUS-primary mb-15 mt-15 mb-15Mobile mt-15Mobile">
          Votre mise à jour du compte agriculteur n’a pas été effectuée
        </p>
        <p className="text-center mb-10 mb-10Mobile">
          Dans le cadre de notre certification et de la réglementation en vigueur, veuillez s'il vous plait mettre à
          jour les informations dans l'espace Profil de l'extranet afin d’accéder à l'ensemble des fonctionnalités.
        </p>
      </Modal>
    </>
  )
})

export default AuthWrapper
