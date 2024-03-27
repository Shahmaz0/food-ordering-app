import React from "react";
import {AppState, Auth0Provider, User} from "@auth0/auth0-react";
import {useCreateMyUser} from "@/api/MyUserApi.tsx";

type Props = {
    children: React.ReactNode
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const { createUser } = useCreateMyUser();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientId || !redirectUri) {
        throw new Error("Unable to initialise auth!")
    }

    const onRedirectCallback = (_appState?: AppState, user?: User) => {
        if (user?.sub && user?.email){
            createUser({auth0Id: user.sub, email: user.email})
        }
    }


    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
            redirect_uri: redirectUri,
        }}
            onRedirectCallback={onRedirectCallback}
        >

            {children}
        </Auth0Provider>
    )

}

export default Auth0ProviderWithNavigate;