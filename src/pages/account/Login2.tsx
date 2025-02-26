import { Button, Alert } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout2 from './AccountLayout2';
import { useLogin } from './hooks';

type UserData = {
    username: string;
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {t("Ainda não tem uma conta?")}{' '}
                <Link to={'/account/register2'} className="text-muted ms-1">
                    <b>{t('Cadastre-se')}</b>
                </Link>
            </p>
        </footer>
    );
};

const Login2 = () => {
    const { t } = useTranslation();
    const { loading, userLoggedIn, user, error, schemaResolver, onSubmit, redirectUrl } = useLogin();

    return (
        <>
            {(userLoggedIn || user) && <Navigate to={redirectUrl} replace />}

            <AccountLayout2 bottomLinks={<BottomLink />}>
                <h4 className="mt-0">{t('Entrar')}</h4>
                <p className="text-muted mb-4">{t('Digite seu endereço de e-mail e senha para ter acesso à conta.')}</p>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ username: 'test', password: 'test' }}
                >
                    <FormInput
                        label={t('Usuário')}
                        type="text"
                        name="username"
                        placeholder={t('Digite seu nome de usuário')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Senha')}
                        type="password"
                        name="password"
                        placeholder={t('Digite sua senha')}
                        containerClass={'mb-3'}
                    >
                        <Link to="/account/forget-password2" className="text-muted float-end">
                            <small>{t('Esqueceu a senha?')}</small>
                        </Link>
                    </FormInput>

                    <div className="d-grid mb-0 text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            <i className="mdi mdi-login"></i> {t('Entrar')}
                        </Button>
                    </div>


                </VerticalForm>
            </AccountLayout2>
        </>
    );
};

export default Login2;
