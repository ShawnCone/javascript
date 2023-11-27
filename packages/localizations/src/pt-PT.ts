import type { LocalizationResource } from '@clerk/types';


const commonTexts = {
  signIn: {
    phoneCode: {
        title: "Verifique o seu telemóvel",
        subtitle: "para continuar em {{applicationName}}",
        formTitle: "Código de verificação",
        formSubtitle: "Insira o código enviado para seu telemóvel",
        resendButton: "Reenviar código",
    },
  },
} as const;

export const ptBR: LocalizationResource = {
    locale: "pt-PT",
    socialButtonsBlockButton: "Continuar com {{provider|titleize}}",
    dividerText: "ou",
    formFieldLabel__emailAddress: "Insira o seu e-mail",
    formFieldLabel__emailAddresses: "Endereços de e-mail",
    formFieldLabel__phoneNumber: "Telemóvel",
    formFieldLabel__username: "Nome de utilizador",
    formFieldLabel__emailAddress_username: "E-mail ou nome de utilizador",
    formFieldLabel__password: "Palavra-passe",
    formFieldLabel__currentPassword: "Palavra-passe atual",
    formFieldLabel__newPassword: "Nova palavra-passe",
    formFieldLabel__confirmPassword: "Confirmar palavra-passe",
    formFieldLabel__signOutOfOtherSessions:
      "Desconectar de todos os outros dispositivos",
    formFieldLabel__automaticInvitations:
      "Ativar convites automáticos para este domínio",
    formFieldLabel__firstName: "Nome",
    formFieldLabel__lastName: "Apelido",
    formFieldLabel__backupCode: "Código de backup",
    formFieldLabel__organizationName: "Nome da organização",
    formFieldLabel__organizationSlug: "URL Slug",
    formFieldLabel__organizationDomain: "Domínio",
    formFieldLabel__organizationDomainEmailAddress:
      "Endereço de e-mail de verificação",
    formFieldLabel__organizationDomainEmailAddressDescription:
      "Endereço de e-mail para receber um código e verificar este domínio",
    formFieldLabel__organizationDomainDeletePending:
      "Excluir convites e sugestões pendentes",
    formFieldLabel__confirmDeletion: "Confirmar exclusão",
    formFieldLabel__role: "Função",
    formFieldInputPlaceholder__emailAddress: "",
    formFieldInputPlaceholder__emailAddresses:
      "Insira um ou mais endereços de e-mail separados por espaços ou vírgulas",
    formFieldInputPlaceholder__phoneNumber: "",
    formFieldInputPlaceholder__username: "",
    formFieldInputPlaceholder__emailAddress_username: "",
    formFieldInputPlaceholder__password: "",
    formFieldInputPlaceholder__firstName: "",
    formFieldInputPlaceholder__lastName: "",
    formFieldInputPlaceholder__backupCode: "",
    formFieldInputPlaceholder__organizationName: "",
    formFieldInputPlaceholder__organizationSlug: "",
    formFieldInputPlaceholder__organizationDomain: "",
    formFieldInputPlaceholder__organizationDomainEmailAddress: "",
    formFieldAction__forgotPassword: "Esqueceu a palavra-passe?",
    formFieldHintText__optional: "Opcional",
    formButtonPrimary: "Continuar",
    signInEnterPasswordTitle: "Insira a sua palavra-passe",
    backButton: "Voltar",
    footerActionLink__useAnotherMethod: "Utilize outro método",
    badge__primary: "Principal",
    badge__thisDevice: "Este dispositivo",
    badge__userDevice: "Dispositivo do utilizador",
    badge__otherImpersonatorDevice: "Personificar outro dispositivo",
    badge__default: "Padrão",
    badge__unverified: "Não verificado",
    badge__requiresAction: "Requer ação",
    badge__you: "O utilizador",
    footerPageLink__help: "Ajuda",
    footerPageLink__privacy: "Privacidade",
    footerPageLink__terms: "Termos de uso",
    paginationButton__previous: "Anterior",
    paginationButton__next: "Próximo",
    paginationRowText__displaying: "Apresentando",
    paginationRowText__of: "de",
    membershipRole__admin: "Administrador",
    membershipRole__basicMember: "Membro",
    membershipRole__guestMember: "Convidado",
    signUp: {
      start: {
        title: "Criar a sua conta",
        subtitle: "para continuar em {{applicationName}}",
        actionText: "Já tem uma conta?",
        actionLink: "Entrar",
      },
      emailLink: {
        title: "Verifique seu e-mail",
        subtitle: "para continuar em {{applicationName}}",
        formTitle: "Link de verificação",
        formSubtitle: "Utilize o link enviado no seu e-mail",
        resendButton: "Reenviar link",
        verified: {
          title: "Registo realizado com sucesso",
        },
        loading: {
          title: "Entrando...",
        },
        verifiedSwitchTab: {
        title: "E-mail verificado com sucesso",
        subtitle: "Volte para a nova aba que foi aberta para continuar",
          subtitleNewTab: "Volte para a aba anterior para continuar",
        },
      },
      emailCode: {
        title: "Verifique o seu e-mail",
        subtitle: "para continuar em {{applicationName}}",
        formTitle: "Código de verificação",
        formSubtitle: "Insira o código enviado para o seu e-mail",
        resendButton: "Não recebeu o código? Reenviar",
      },
      phoneCode: {
        title: "Verifique o seu telemóvel",
        subtitle: "para continuar em {{applicationName}}",
        formTitle: "Código de verificação",
        formSubtitle: "Insira o código enviado para o seu telemóvel",
        resendButton: "Não recebeu o código? Reenviar",
      },
      continue: {
        title: "Preencha os campos ausentes",
        subtitle: "para continuar em {{applicationName}}",
        actionText: "Já possui uma conta?",
        actionLink: "Entrar",
      },
    },
    signIn: {
      start: {
        title: "Entrar",
        subtitle: "para continuar em {{applicationName}}",
        actionText: "Não possui uma conta?",
        actionLink: "Registre-se",
        actionLink__use_email: "Usar e-mail",
        actionLink__use_phone: "Usar telemóvel",
        actionLink__use_username: "Usar nome de utilizador",
        actionLink__use_email_username: "Usar e-mail ou nome de utilizador",
      },
      password: {
        title: "Insira a sua palavra-passe",
        subtitle: "para continuar em {{applicationName}}",
        actionLink: "Utilize outro método",
      },
      forgotPasswordAlternativeMethods: {
        title: "Esqueceu-se da palavra-passe?",
        label__alternativeMethods: "Ou, faça login com outro método.",
        blockButton__resetPassword: "Repor a palavra-passe",
      },
      forgotPassword: {
        title_email: "Verifique o seu e-mail",
        title_phone: "Verifique o seu telemóvel",
        subtitle: "para redefinir a sua palavra-passe",
        formTitle: "Código de redefinição de palavra-passe",
        formSubtitle_email:
          "Escreva o código enviado para o seu endereço de e-mail",
        formSubtitle_phone:
          "Escreva o código enviado para o seu número de telemóvel",
        resendButton: "Não recebeu um código? Reenviar",
      },
      resetPassword: {
        title: "Repor Palavra-passe",
        formButtonPrimary: "Repor Palavra-passe",
        successMessage:
          "A sua palavra-passe foi alterada com sucesso. Entrando, por favor aguarde um momento.",
      },
      resetPasswordMfa: {
        detailsLabel:
          "Precisamos verificar a sua identidade antes de redefinir a palavra-passe.",
      },
      emailCode: {
        title: "Verifique o seu e-mail",
        subtitle: "para continuar em {{applicationName}}",
        formTitle: "Código de verificação",
        formSubtitle: "Insira o código enviado para o seu e-mail",
        resendButton: "Reenviar código",
      },
      emailLink: {
        title: "Verifique o seu e-mail",
        subtitle: "para continuar em {{applicationName}}",
        formTitle: "Link de verificação",
        formSubtitle: "Utilize o link enviado no seu e-mail",
        resendButton: "Não recebeu um link? Reenviar",
        unusedTab: {
          title: "Já pode fechar esta aba",
        },
        verified: {
          title: "Login realizado com sucesso",
          subtitle: "Será redirecionado em breve",
        },
        verifiedSwitchTab: {
          subtitle: "Retorne para a aba original para continuar",
          titleNewTab: "Conectado em outra aba",
          subtitleNewTab: "Retorne para a nova aba que foi aberta para continuar",
        },
        loading: {
          title: "Entrando...",
          subtitle: "Será redirecionado em breve",
        },
        failed: {
          title: "Este link de verificação é inválido",
          subtitle: "Retorne para a aba original para continuar",
        },
        expired: {
          title: "Este link de verificação expirou",
          subtitle: "Retorne para a aba original para continuar",
        },
      },
      phoneCode: { ...commonTexts.signIn.phoneCode },
      phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: "" },
      totpMfa: {
        title: "Verificação de duas etapas",
        subtitle: "",
        formTitle: "Código de verificação",
        formSubtitle: "Insira o código gerado pelo seu autenticador",
      },
      backupCodeMfa: {
        title: "Insira um código de backup",
        subtitle: "para continuar em {{applicationName}}",
        formTitle: "Código de backup",
        formSubtitle: "",
      },
      alternativeMethods: {
        title: "Utilize outro método",
        actionLink: "Ajuda",
        blockButton__emailLink: "Enviar link para {{identifier}}",
        blockButton__emailCode: "Enviar código para {{identifier}}",
        blockButton__phoneCode: "Enviar código para {{identifier}}",
        blockButton__password: "Fazer login com palavra-passe",
        blockButton__totp: "Utilize o seu autenticador",
        blockButton__backupCode: "Utilize um código de backup",
        getHelp: {
          title: "Ajuda",
          content:
            "Se estiver com dificuldades para entrar na sua conta, envie-nos um e-mail e iremos ajudar-te a restaurar o acesso o mais rápido possível.",
          blockButton__emailSupport: "E-mail de suporte",
        },
      },
      noAvailableMethods: {
        title: "Não foi possível fazer login",
        subtitle: "Ocorreu um erro",
        message:
          "Não foi possível fazer login. Não há nenhum método de autenticação disponível.",
      },
    },
    userProfile: {
      mobileButton__menu: "Menu",
      formButtonPrimary__continue: "Continuar",
      formButtonPrimary__finish: "Finalizar",
      formButtonReset: "Cancelar",
      start: {
        headerTitle__account: "Conta",
        headerTitle__security: "Segurança",
        headerSubtitle__account: "Configurar as informações da conta",
        headerSubtitle__security: "Configurar as preferências de segurança",
        profileSection: {
          title: "Perfil",
        },
        usernameSection: {
          title: "Nome de utilizador",
  
          primaryButton__changeUsername: "Trocar nome de utilizador",
          primaryButton__setUsername: "Definir nome de utilizador",
        },
        emailAddressesSection: {
          title: "Endereços de e-mail",
          primaryButton: "Adicionar um e-mail",
          detailsTitle__primary: "E-mail principal",
          detailsSubtitle__primary: "Este é o seu e-mail principal",
          detailsAction__primary: "Completar verificação",
          detailsTitle__nonPrimary: "Definir como e-mail principal",
          detailsSubtitle__nonPrimary:
            "Defina este e-mail como principal para receber as comunicações sobre a sua conta",
          detailsAction__nonPrimary: "Definir como principal",
          detailsTitle__unverified: "E-mail não verificado",
          detailsSubtitle__unverified:
            "Este e-mail não foi verificado e pode ser limitado",
          detailsAction__unverified: "Completar verificação",
          destructiveActionTitle: "Remover",
          destructiveActionSubtitle:
            "Você não conseguirá fazer login novamente com este endereço de e-mail",
          destructiveAction: "Remover e-mail",
        },
        phoneNumbersSection: {
          title: "Números de telemóvel",
          primaryButton: "Adicione um telemóvel",
          detailsTitle__primary: "Telemóvel principal",
          detailsSubtitle__primary: "Este é o telemóvel principal",
          detailsAction__primary: "Completar verificação",
          detailsTitle__nonPrimary: "Definir como telemóvel principal",
          detailsSubtitle__nonPrimary:
            "Defina este telemóvel como o principal para receber as comunicações sobre a sua conta",
          detailsAction__nonPrimary: "Definir como principal",
          detailsTitle__unverified: "Telemóvel não verificado",
          detailsSubtitle__unverified:
            "Este telemóvel não foi verificado e pode ser limitado",
          detailsAction__unverified: "Completar verificação",
          destructiveActionTitle: "Remover",
          destructiveActionSubtitle: "Remover este telemóvel desta conta",
          destructiveAction: "Remover telemóvel",
        },
        connectedAccountsSection: {
          title: "Contas conectadas",
          primaryButton: "Conectar conta",
          title__connectionFailed: "A conexão falhou, tente novamente",
          title__reauthorize: "Reautorização necessária",
          subtitle__reauthorize:
            "Os dados necessários foram atualizados e pode estar experimentando funcionalidades limitadas. Por favor, re-autorize esta aplicação para evitar quaisquer problemas.",
          actionLabel__connectionFailed: "Tentar novamente",
          actionLabel__reauthorize: "Reautorizar agora",
          destructiveActionTitle: "Remover",
          destructiveActionSubtitle: "Remover esta conexão da sua conta",
          destructiveActionAccordionSubtitle: "Remover conexão",
        },
        enterpriseAccountsSection: {
          title: "Contas corporativas",
        },
        passwordSection: {
          title: "Palavra-passe",
          primaryButton__changePassword: "Trocar palavra-passe",
          primaryButton__setPassword: "Definir palavra-passe",
        },
        mfaSection: {
          title: "Verificação de duas etapas",
          primaryButton: "Adicione verificação",
          phoneCode: {
            destructiveActionTitle: "Remover",
            destructiveActionSubtitle:
              "Remover este telemóvel dos métodos de verificação de duas etapas",
            destructiveActionLabel: "Remover telemóvel",
            title__default: "Telemóvel principal",
            title__setDefault: "Definir como telemóvel principal",
            subtitle__default:
              "Este telemóvel será usado como o método de verificação de duas etapas ao fazer login.",
            subtitle__setDefault:
              "Defina este telemóvel como principal para usá-lo como o método de verificação de duas etapas ao fazer login.",
            actionLabel__setDefault: "Definir como principal",
          },
          backupCodes: {
            headerTitle: "Códigos de backup",
            title__regenerate: "Gerar novos códigos de backup",
            subtitle__regenerate:
              "Obter um novo conjunto de códigos de backup seguros. Os códigos de backup anteriores serão excluídos e não poderão ser utilizados novamente.",
            actionLabel__regenerate: "Gerar novos códigos",
          },
          totp: {
            headerTitle: "Autenticador",
            title: "Fator principal",
            subtitle:
              "Este fator será usado como o método de verificação de duas etapas padrão ao fazer login.",
            destructiveActionTitle: "Remover",
            destructiveActionSubtitle:
              "Remover autenticador dos métodos de verificação de duas etapas",
            destructiveActionLabel: "Remover autenticador",
          },
        },
        activeDevicesSection: {
          title: "Dispositivos ativos",
          primaryButton: "Dispositivos ativos",
          detailsTitle: "Dispositivo atual",
          detailsSubtitle: "Este é o dispositivo que está a utilizar",
          destructiveActionTitle: "Terminar sessão",
          destructiveActionSubtitle: "Terminar sessão neste dispositivo",
          destructiveAction: "Terminar sessão",
        },
        web3WalletsSection: {
          title: "Carteiras Web3",
          primaryButton: "Carteiras Web3",
          destructiveActionTitle: "Remover",
          destructiveActionSubtitle: "Remover esta carteira Web3 da sua conta",
          destructiveAction: "Remover carteira",
        },
        dangerSection: {
          title: "Perigo",
          deleteAccountButton: "Excluir Conta",
          deleteAccountTitle: "Excluir Conta",
          deleteAccountDescription:
            "Excluir conta e todos os dados associados a ela",
        },
      },
      profilePage: {
        title: "Atualizar perfil",
        imageFormTitle: "Imagem de perfil",
        imageFormSubtitle: "Carregar imagem",
        imageFormDestructiveActionSubtitle: "Remover imagem",
        fileDropAreaTitle: "Arraste o ficheiro aqui ou...",
        fileDropAreaAction: "Selecione uma imagem",
        fileDropAreaHint:
          "Carregue uma imagem JPG, PNG, GIF ou WEBP menor que 10MB",
        readonly:
          "As informações do perfil foram fornecidas pela conexão corporativa e não podem ser editadas.",
        successMessage: "O perfil foi atualizado.",
      },
      usernamePage: {
        title: "Atualizar nome de utilizador",
        successMessage: "O nome de utilizador foi atualizado.",
      },
      emailAddressPage: {
        title: "Adicionar e-mail",
        emailCode: {
          formHint:
            "Um e-mail contendo um código de verificação será enviado para este endereço de e-mail.",
          formTitle: "Código de verificação",
          formSubtitle:
            "Insira o código de verificação enviado para {{identifier}}",
          resendButton: "Não recebeu um código? Reenviar",
          successMessage: "O e-mail {{identifier}} foi adicionado à sua conta.",
        },
        emailLink: {
          formHint:
            "Um e-mail contendo um link de verificação será enviado para este endereço de e-mail.",
          formTitle: "Link de verificação",
          formSubtitle:
            "Clique no link de verificação enviado para {{identifier}}",
          resendButton: "Não recebeu um código? Reenviar",
          successMessage: "O e-mail {{identifier}} foi adicionado à sua conta.",
        },
        removeResource: {
          title: "Remover e-mail",
          messageLine1: "{{identifier}} será removido desta conta.",
          messageLine2:
            "Não vai conseguir fazer login novamente com este endereço de e-mail.",
          successMessage: "{{emailAddress}} foi removido da sua conta.",
        },
      },
      phoneNumberPage: {
        title: "Adicionar telemóvel",
        successMessage: "{{identifier}} foi adicionado à sua conta.",
        infoText:
          "Um SMS contendo um link de verificação será enviado para este telemóvel.",
        infoText__secondary:
          "Poderá haver cobranças extras pelo envio do SMS.",
        removeResource: {
          title: "Remover telemóvel",
          messageLine1: "{{identifier}} será removido desta conta.",
          messageLine2:
            "Não vai conseguir fazer login novamente com este número de telemóvel.",
          successMessage: "{{phoneNumber}} foi removido da sua conta.",
        },
      },
      connectedAccountPage: {
        title: "Conecte uma conta",
        formHint: "Selecione um provedor para conectar à sua conta.",
        formHint__noAccounts: "Não há provedores de conta externos disponíveis.",
        socialButtonsBlockButton: "Conectar conta {{provider|titleize}}",
        successMessage: "O provedor foi adicionado à sua conta",
        removeResource: {
          title: "Remover conta conectada",
          messageLine1: "{{identifier}} será removido desta conta.",
          messageLine2:
            "Não vai conseguir usar esta conta e, quaisquer recursos dependentes dela deixarão de funcionar.",
          successMessage: "{{connectedAccount}} foi removido da sua conta.",
        },
      },
      web3WalletPage: {
        title: "Adicionar carteira Web3",
        subtitle__availableWallets:
          "Selecione uma carteira Web3 para conectar à sua conta.",
        subtitle__unavailableWallets: "Não há carteiras Web3 disponíveis.",
        successMessage: "A carteira foi adicionada à sua conta.",
        removeResource: {
          title: "Remover carteira Web3",
          messageLine1: "{{identifier}} será removido desta conta.",
          messageLine2:
            "Não vai conseguir usar esta carteira Web3 para entrar na sua conta.",
          successMessage: "{{Web3Wallet}} foi removido da sua conta.",
        },
      },
      passwordPage: {
        title: "Defina a palavra-passe",
        changePasswordTitle: "Trocar palavra-passe",
        readonly:
          "A sua palavra-passe não pode ser editada porque só pode fazer login por meio da conexão da empresa.",
        successMessage: "A sua palavra-passe foi guardada.",
        changePasswordSuccessMessage: "A sua palavra-passe foi atualizada.",
        sessionsSignedOutSuccessMessage:
          "Todos os outros dispositivos foram desconectados.",
      },
      mfaPage: {
        title: "Adicione verificação de duas etapas",
        formHint: "Selecione um método para adicionar.",
      },
      mfaTOTPPage: {
        title: "Adicionar um autenticador",
        verifyTitle: "Código de verificação",
        verifySubtitle:
          "Insira o código de verificação gerado pelo seu autenticador",
        successMessage:
          "A verificação de duas etapas está agora ativa. Ao fazer login, precisará de inserir um código de verificação deste autenticador como uma etapa adicional.",
        authenticatorApp: {
          infoText__ableToScan:
            "Configure um novo método de login no seu autenticador e leia o seguinte código QR para vinculá-lo à sua conta.",
          infoText__unableToScan:
            "Configure um novo método de login no seu autenticador e insira a chave informada abaixo.",
          inputLabel__unableToScan1:
            "Certifique-se de que o 'One-time passwords' está ativo, de seguida, conclua a conexão da sua conta.",
          inputLabel__unableToScan2:
            "Alternativamente, se o seu autenticador suportar URIs TOTP, também pode copiar a URI completa.",
          buttonAbleToScan__nonPrimary: "Ler código QR em vez disso",
          buttonUnableToScan__nonPrimary: "Não pode ler o código QR?",
        },
        removeResource: {
          title: "Remover verificação de duas etapas",
          messageLine1:
            "Os códigos de verificação deste autenticador não serão mais necessários ao fazer login.",
          messageLine2:
            "A sua conta pode ficar menos segura. Tem certeza que deseja continuar?",
          successMessage:
            "A verificação de duas etapas via autenticador foi removida.",
        },
      },
      mfaPhoneCodePage: {
        title: "Adicionar verificação por SMS",
        primaryButton__addPhoneNumber: "Adicione um número de telemóvel",
        subtitle__availablePhoneNumbers:
          "Selecione um número de telemóvel para registrar a verificação de duas etapas por código SMS.",
        subtitle__unavailablePhoneNumbers:
          "Não há números de telemóvel disponíveis para registrar a verificação de duas etapas por código SMS.",
        successMessage:
          "Verificação de duas etapas por código SMS agora está ativa para este número de telemóvel. Ao fazer login, precisará de inserir um código de verificação enviado para este número de telemóvel como etapa adicional.",
        removeResource: {
          title: "Remover verificação de duas etapas",
          messageLine1:
            "{{identifier}} não receberá mais códigos de verificação ao realizar o login.",
          messageLine2:
            "A sua conta pode ficar menos segura. Tem certeza que deseja continuar?",
          successMessage:
            "Código SMS de verificação de duas etapas foi removido para {{mfaPhoneCode}}",
        },
      },
      backupCodePage: {
        title: "Adicionar código de backup para verificação",
        title__codelist: "Códigos de backup",
        subtitle__codelist: "Guarde-os em segurança e não os partilhe.",
        infoText1: "Códigos de backup serão ativados para esta conta.",
        infoText2:
          "Guarde-os em segurança e não os partilhe. Você pode gerar novos códigos de backup se suspeitar que eles tenham sido comprometidos.",
        successSubtitle:
          "Pode usar um deles para fazer login na sua conta caso perca o acesso ao seu dispositivo de autenticação.",
        successMessage:
          "Códigos de backup foram ativados para esta conta. Pode usar um deles para fazer login na sua conta caso perca o acesso ao seu dispositivo de autenticação. Cada código poderá ser utilizado apenas uma vez.",
        actionLabel__copy: "Copiar tudo",
        actionLabel__copied: "Copiado!",
        actionLabel__download: "Download .txt",
        actionLabel__print: "Imprimir",
      },
      deletePage: {
        title: "Excluir conta",
        messageLine1: "Tem certeza de que deseja excluir a sua conta?",
        messageLine2: "Esta ação é permanente e irreversível.",
        actionDescription: "Escreva Excluir conta abaixo para continuar.",
        confirm: "Excluir conta",
      },
    },
    userButton: {
      action__manageAccount: "Configurar conta",
      action__signOut: "Terminar sessão",
      action__signOutAll: "Terminar sessão de todas as contas",
      action__addAccount: "Adicionar conta",
    },
    organizationSwitcher: {
      personalWorkspace: "Conta pessoal",
      notSelected: "Nenhuma organização selecionada",
      action__createOrganization: "Criar organização",
      action__manageOrganization: "Configurar organização",
      action__invitationAccept: "Participar",
      action__suggestionsAccept: "Solicitar participação",
      suggestionsAcceptedLabel: "Aprovação pendente",
    },
    impersonationFab: {
      title: "Sessão iniciada como {{identifier}}",
      action__signOut: "Terminar sessão",
    },
    organizationProfile: {
      badge__unverified: "Não verificado",
      badge__automaticInvitation: "Convites automáticos",
      badge__automaticSuggestion: "Sugestões automáticas",
      badge__manualInvitation: "Sem inscrição automática",
      start: {
        headerTitle__members: "Membros",
        headerTitle__settings: "Configurações",
        headerSubtitle__members: "Veja e configure os membros da organização",
        headerSubtitle__settings: "Configure as configurações da organização",
      },
      profilePage: {
        title: "Perfil da organização",
        subtitle: "Configure o perfil da organização",
        successMessage: "A organização foi atualizada.",
        dangerSection: {
          title: "Perigo",
          leaveOrganization: {
            title: "Sair da organização",
            messageLine1:
              "Tem certeza de que deseja sair desta organização? Você perderá o acesso a esta organização e às suas aplicações.",
            messageLine2: "Esta ação é permanente e não pode ser desfeita.",
            successMessage: "Você saiu da organização.",
            actionDescription:
              "Escreva {{organizationName}} abaixo para continuar.",
          },
          deleteOrganization: {
            title: "Excluir organização",
            messageLine1: "Tem certeza de que deseja excluir esta organização?",
            messageLine2: "Esta ação é permanente e irreversível.",
            actionDescription:
              "Escreva {{organizationName}} abaixo para continuar.",
            successMessage: "Você excluiu a organização.",
          },
        },
        domainSection: {
          title: "Domínios verificados",
          subtitle:
            "Permita que os utilizadores juntem-se à organização automaticamente ou solicitem participação com base num domínio de e-mail verificado.",
          primaryButton: "Adicionar domínio",
          unverifiedDomain_menuAction__verify: "Verificar domínio",
          unverifiedDomain_menuAction__remove: "Excluir domínio",
        },
      },
      createDomainPage: {
        title: "Adicionar domínio",
        subtitle:
          "Adicione o domínio para verificar. Utilizadores com endereços de e-mail neste domínio podem entrar na organização automaticamente ou solicitar entrada.",
      },
      verifyDomainPage: {
        title: "Verificar domínio",
        subtitle: "O domínio {{domainName}} precisa ser verificado por e-mail.",
        subtitleVerificationCodeScreen:
          "Um código de verificação foi enviado para {{emailAddress}}. Insira-o para continuar.",
        formTitle: "Código de verificação",
        formSubtitle:
          "Insira o código de verificação enviado para o seu endereço de e-mail",
        resendButton: "Não recebeu um código? Reenviar",
      },
      verifiedDomainPage: {
        subtitle:
          "O domínio {{domain}} agora está verificado. Continue por selecionar o modo de inscrição.",
        start: {
          headerTitle__enrollment: "Opções de inscrição",
          headerTitle__danger: "Perigo",
        },
        enrollmentTab: {
          subtitle:
            "Escolha como os utilizadores deste domínio se podem entrar na organização.",
          manualInvitationOption__label: "Sem inscrição automática",
          manualInvitationOption__description:
            "Os utilizadores só podem ser convidados manualmente para a organização.",
          automaticInvitationOption__label: "Convites automáticos",
          automaticInvitationOption__description:
            "Os utilizadores são automaticamente convidados a entrar na organização quando se inscrevem.",
          automaticSuggestionOption__label: "Sugestões automáticas",
          automaticSuggestionOption__description:
            "Os utilizadores recebem uma sugestão para solicitar participação, mas devem ser aprovados por um administrador antes de poderem entrar na organização.",
          formButton__save: "Guardar",
          calloutInfoLabel:
            "Alterar o modo de inscrição afetará apenas os novos utilizadores.",
          calloutInvitationCountLabel:
            "Convites pendentes enviados aos utilizadores: {{count}}",
          calloutSuggestionCountLabel:
            "Sugestões pendentes enviadas aos utilizadores: {{count}}",
        },
        dangerTab: {
          removeDomainTitle: "Excluir domínio",
          removeDomainSubtitle:
            "Remova este domínio dos seus domínios verificados",
          removeDomainActionLabel__remove: "Excluir domínio",
          calloutInfoLabel:
            "A exclusão deste domínio afetará os utilizadores convidados.",
        },
      },
      invitePage: {
        title: "Convidar membros",
        subtitle: "Convidar novos membros para esta organização",
        successMessage: "Convites enviados com sucesso",
        detailsTitle__inviteFailed:
          "Os convites não puderam ser enviados. Corrija o seguinte e tente novamente:",
        formButtonPrimary__continue: "Enviar convites",
      },
      removeDomainPage: {
        title: "Excluir domínio",
        messageLine1: "O domínio de e-mail {{domain}} será removido.",
        messageLine2:
          "Os utilizadores não conseguirão entrar na organização após isso.",
        successMessage: "{{domain}} foi removido.",
      },
      membersPage: {
        detailsTitle__emptyRow: "Nenhum membro para mostrar",
        action__invite: "Convidar",
        start: {
          headerTitle__members: "Membros",
          headerTitle__invitations: "Convites",
          headerTitle__requests: "Pedidos",
        },
        activeMembersTab: {
          tableHeader__user: "Utilizador",
          tableHeader__joined: "Entrou",
          tableHeader__role: "Função",
          tableHeader__actions: "",
          menuAction__remove: "Remover membro",
        },
        invitedMembersTab: {
          tableHeader__invited: "Convidado",
          menuAction__revoke: "Cancelar convite",
        },
        invitationsTab: {
          table__emptyRow: "Nenhum convite a mostrar",
          manualInvitations: {
            headerTitle: "Convites individuais",
            headerSubtitle:
              "Convide manualmente membros e configure convites existentes.",
          },
          autoInvitations: {
            headerTitle: "Convites automáticos",
            headerSubtitle:
              "Convide utilizadores conectando um domínio de e-mail com a sua organização. Qualquer pessoa que se inscrever com um domínio de e-mail correspondente poderá se entrar na organização a qualquer momento.",
            primaryButton: "Configurar domínios verificados",
          },
        },
        requestsTab: {
          tableHeader__requested: "Acesso solicitado",
          menuAction__approve: "Aprovar",
          menuAction__reject: "Rejeitar",
          table__emptyRow: "Nenhuma solicitação a mostrar",
          requests: {
            headerTitle: "Pedidos",
            headerSubtitle:
              "Navegue e configure utilizadores que solicitaram participação na organização.",
          },
          autoSuggestions: {
            headerTitle: "Sugestões automáticas",
            headerSubtitle:
              "Utilizadores que se inscrevem com um domínio de e-mail correspondente podem ver uma sugestão para solicitar participação na sua organização.",
            primaryButton: "Configurar domínios verificados",
          },
        },
      },
    },
    createOrganization: {
      title: "Criar organização",
      formButtonSubmit: "Criar organização",
      invitePage: {
        formButtonReset: "Ignorar",
      },
    },
    organizationList: {
      createOrganization: "Criar organização",
      title: "Selecione uma conta",
      titleWithoutPersonal: "Selecione uma organização",
      subtitle: "para continuar no {{applicationName}}",
      action__invitationAccept: "Participar",
      invitationAcceptedLabel: "Participando",
      action__suggestionsAccept: "Solicitar participação",
      suggestionsAcceptedLabel: "Aprovação pendente",
      action__createOrganization: "Criar organização",
    },
    unstable__errors: {
      identification_deletion_failed:
        "Você não pode excluir a sua última identificação.",
      phone_number_exists:
        "Este número de telemóvel já está em uso. Por favor, tente outro.",
      form_identifier_not_found: "",
      captcha_invalid:
        "Não foi possível inscrever-se devido a falhas nas validações de segurança. Por favor, atualize a página para tentar novamente ou entre em contato com o suporte para obter mais ajuda.",
      form_password_pwned:
        "Esta palavra-passe foi encontrada como parte de uma violação e não pode ser usada, por favor, tente outra palavra-passe.",
      form_username_invalid_length: "",
      form_username_invalid_character: "",
      form_param_format_invalid: "",
      form_param_format_invalid__phone_number: 'O número de telemóvel deve ser válido.',
      form_param_format_invalid__email_address:
        "O endereço de e-mail deve ser válido.",
      form_password_length_too_short: "",
      form_param_nil: "",
      form_code_incorrect: "",
      form_password_incorrect: "",
      not_allowed_access: "",
      form_identifier_exists: "",
      form_password_validation_failed: "Palavra-passe incorreta",
      form_password_not_strong_enough: "A sua palavra-passe não é forte o suficiente.",
      form_password_size_in_bytes_exceeded:
        "A sua palavra-passe excedeu o número máximo de bytes permitidos, por favor, encurte-a ou remova alguns caracteres especiais.",
      passwordComplexity: {
        sentencePrefix: "A sua palavra-passe deve conter",
        minimumLength: "{{length}} ou mais caracteres",
        maximumLength: "menos de {{length}} caracteres",
        requireNumbers: "um número",
        requireLowercase: "uma letra minúscula",
        requireUppercase: "uma letra maiúscula",
        requireSpecialCharacter: "um caractere especial",
      },
      zxcvbn: {
        notEnough: "A sua palavra-passe não é forte o suficiente.",
        couldBeStronger:
          "A sua palavra-passe funciona, mas poderia ser mais forte. Tente adicionar mais caracteres.",
        goodPassword: "A sua palavra-passe atende a todos os requisitos necessários.",
        warnings: {
          straightRow:
            "Letras que vêm em sequência no teclado são fáceis de adivinhar.",
          keyPattern: "Padrões curtos de teclado são fáceis de adivinhar.",
          simpleRepeat:
            'Caracteres repetidos, como "aaa" são fáceis de adivinhar.',
          extendedRepeat:
            'Padrões de caracteres repetidos, como "abcabcabc" são fáceis de adivinhar.',
          sequences:
            'Sequências comuns de caracteres, como "abc" são fáceis de adivinhar.',
          recentYears: "Anos recentes são fáceis de adivinhar.",
          dates: "Datas são fáceis de adivinhar.",
          topTen: "Esta é uma palavra-passe muito usada.",
          topHundred: "Esta é uma palavra-passe usada frequentemente.",
          common: "Esta é uma palavra-passe comumente usada.",
          similarToCommon: "Esta é semelhante a uma palavra-passe comumente usada.",
          wordByItself: "Palavras simples são fáceis de adivinhar.",
          namesByThemselves: "Nomes ou apelidos são fáceis de adivinhar.",
          commonNames: "Nomes e apelidos comuns são fáceis de adivinhar.",
          userInputs:
            "Não deve haver nenhum dado pessoal ou relacionado à página.",
          pwned: "A sua palavra-passe foi exposta numa violação de dados na Internet.",
        },
        suggestions: {
          l33t: "Evite substituições previsíveis de letras, como '@' por 'a'.",
          reverseWords:
            'Evite utilizar palavras comuns escritas de "trás para frente".',
          allUppercase: "Utilize apenas algumas letras maiúsculas, não todas.",
          capitalization:
            "Utilize outras letras maiúsculas, além do que primeira.",
          dates: "Evite datas e anos associados a você.",
          recentYears: "Evite anos recentes.",
          associatedYears: "Evite anos associados a você.",
          sequences: "Evite sequências comuns de caracteres.",
          repeated: "Evite palavras e caracteres repetidos.",
          longerKeyboardPattern:
            "Use padrões de teclado mais longos e mude a direção da digitação várias vezes.",
          anotherWord: "Adicione palavras menos comuns.",
          useWords: "Use várias palavras, mas evite frases comuns.",
          noNeed:
            "Você pode criar palavras-passes fortes sem usar símbolos, números ou letras maiúsculas.",
          pwned: "Se usar esta palavra-passe noutro lugar, deve mudá-la.",
        },
      },
      form_param_max_length_exceeded__name:
        "O nome não deve exceder 256 caracteres.",
      form_param_max_length_exceeded__first_name:
        "O primeiro nome não deve exceder 256 caracteres.",
      form_param_max_length_exceeded__last_name:
        "O apelido não deve exceder 256 caracteres.",
    },
    dates: {
      previous6Days:
        "Último {{ date | weekday('pt-PT','long') }} às {{ date | timeString('pt-PT') }}",
      lastDay: "Ontem às {{ date | timeString('pt-PT') }}",
      sameDay: "Hoje às {{ date | timeString('pt-PT') }}",
      nextDay: "Amanhã às {{ date | timeString('pt-PT') }}",
      next6Days:
        "{{ date | weekday('pt-PT','long') }} às {{ date | timeString('pt-PT') }}",
      numeric: "{{ date | numeric('pt-PT') }}",
  },
} as const;
