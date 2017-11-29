using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;
using HashLibrary;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void Tenancies_Inserting(Tenancy entity)
        {
            var hasher = new Hasher(20, 20);

            var hashedTenant = hasher.HashPassword(string.Format("{0}_{1}", entity.TenantName, entity.TenantCode));
            var hashedLessor = hasher.HashPassword(string.Format(entity.LessorName + entity.LessorCode));

            entity.TenantId = hashedTenant.Hash;
            entity.TenantSalt = hashedTenant.Salt;
            entity.LessorId = hashedLessor.Hash;
            entity.LessorSalt = hashedLessor.Salt;
        }
    }
}