import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthService);

  if (service.haveAcess()) {
    return true;
  } else {
    alert('Login First!!');
    router.navigate(['/login']);
    return false;
  }
};
