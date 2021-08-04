import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseHttpService} from '@core/services/base-http.service';
import {map} from 'rxjs/operators';
import {MemberLookup} from '@core/models/member-lookup.model';
import {CoreModule} from '@core/core.module';

/**
 * Registration Service
 * <p>Used to supply registration components with API calls.</p>
 */
@Injectable({
  providedIn: CoreModule
})
export class RegistrationService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Look up member returns a boolean that represents
   * the existence of a member with the provided
   * MemberLookup object.
   * @param memberLookup Contains PII of the member to look up.
   * @return Observable of a boolean.
   */
  lookUpMember(memberLookup: MemberLookup): Observable<boolean> {
    return this.http.post(this.getApi('/member-lookups'), memberLookup, {observe: 'response'})
      .pipe(map(res => res.status === 200));
  }

}
