export class WindowPopupHandler {
  popup: Window | null;
  baseUrl: URL;

  // test: http://localhost:5173
  constructor() {
    this.popup = null;
    this.baseUrl = new URL(` https://dev.accounts.susimdal.com/`);
  }

  setCommonAccountsUrl = (
    path: 'sign-up' | 'edit' | 'find' | 'migrate' | 'update-term' | 'connect-service',
    serviceId: string,
    email?: string,
    accessToken?: string
  ) => {
    let newBaseUrl = new URL(path, this.baseUrl);

    newBaseUrl.searchParams.set('service', serviceId);

    if (['migrate', 'update-term', 'connect-service'].includes(path) && email) {
      newBaseUrl.searchParams.set('email', email);
    }

    if (path === 'edit' && accessToken && email) {
      newBaseUrl.searchParams.set('accessToken', accessToken);
      newBaseUrl.searchParams.set('email', email);
    }

    return newBaseUrl;
  };

  setPopupFullSizeParams = () => {
    let params = `width= ` + screen.width;
    params += `, height= ` + screen.height;
    params += `, top=0, left=0`;
    params += `, fullscreen=yes`;

    return params;
  };

  popupMessageListener = (event: MessageEvent) => {
    console.log(event.origin, this.baseUrl.toString());
    if (event.origin + '/' !== this.baseUrl.toString()) {
      return;
    }
    const parseData = JSON.parse(event.data);

    if (parseData.userDto) {
      const parsedUserDto = parseData;
      console.log(parsedUserDto);
    }

    this.popup?.close();
    window.removeEventListener('message', this.popupMessageListener);
  };

  openSignupPopup = (
    path: 'sign-up' | 'edit' | 'find' | 'migrate' | 'update-term' | 'connect-service',
    serviceId: string,
    email?: string,
    accessToken?: string
  ) => {
    const popupParams = this.setPopupFullSizeParams();
    const commonAccountsSignupUrl = this.setCommonAccountsUrl(path, serviceId, email, accessToken).toString();
    this.popup = window.open(commonAccountsSignupUrl, 'blueSignup', popupParams);
    window.addEventListener('message', this.popupMessageListener);
  };
}
