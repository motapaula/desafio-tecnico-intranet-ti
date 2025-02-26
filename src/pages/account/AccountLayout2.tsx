import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from 'assets/images/intranet_logo.jpg';
import { useAccountLayout } from './hooks';

type AccountLayoutProps = {
    bottomLinks?: React.ReactNode;
    children?: React.ReactNode;
};

const AccountLayout2 = ({ bottomLinks, children }: AccountLayoutProps) => {
    useAccountLayout();
    const { t } = useTranslation();

    return (
        <div className="auth-fluid">
            {/* Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <Card.Body>
                        {/* logo */}
                        <div className="auth-brand text-center text-lg-start">
                            
                            <Link to="/" className="logo-light">
                                <span>
                                <img src={Logo} alt="" height="18" width={200} />
                                </span>
                            </Link>
                        </div>

                        {children}

                        {/* footer links */}
                        {bottomLinks}
                    </Card.Body>
                </div>
            </div>

            {/* Auth fluid right content */}
            <div className="auth-fluid-right text-center">
                <div className="auth-user-testimonial">
                    <h2 className="mb-3">{t('Acesso seguro, colaboração eficiente.')}</h2>
                    <p className="lead">
                        
                        {t(" Bem-vindo à sua central de produtividade! Acesse a intranet para conectar-se com sua equipe, acessar informações essenciais e manter seu trabalho sempre em movimento – com segurança e praticidade.")}{' '}
                        
                    </p>
                    <p>{t('- Hub Intranet')}</p>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout2;
