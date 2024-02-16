export class WindowPopupHandler {
  popup: Window | null;
  baseUrl: URL;

  constructor() {
    this.popup = null;
    this.baseUrl = new URL(`https://dev.accounts.susimdal.com`);
  }

  setCommonAccountsUrl = (
    path: 'sign-up' | 'edit' | 'find' | 'integrate' | 'update-term',
    serviceId: string,
    email?: string,
    accessToken?: string
  ) => {
    let newBaseUrl = new URL(path, this.baseUrl);

    newBaseUrl.searchParams.set('step', '0');
    newBaseUrl.searchParams.set('serviceId', serviceId);

    if (['integrate', 'update-term'].includes(path) && email) {
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
    if (event.origin + '/' !== this.baseUrl.toString()) {
      return;
    }

    if (event.data === 'popup-close') {
      this.popup?.close();
      window.removeEventListener('message', this.popupMessageListener);
      return;
    }

    const parsedUserDto = JSON.parse(event.data);
    console.log(parsedUserDto);
  };

  openSignupPopup = (
    path: 'sign-up' | 'edit' | 'find' | 'integrate' | 'update-term',
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
