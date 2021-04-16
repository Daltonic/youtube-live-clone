// Auth service
import { AuthService } from "./shared/services/auth.service";

// Import canActivate guards
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";

@NgModule({
  declarations: [...],
  imports: [...],
  providers: [AuthService, AuthGuard, SecureInnerPagesGuard],
  bootstrap: [...]
})
