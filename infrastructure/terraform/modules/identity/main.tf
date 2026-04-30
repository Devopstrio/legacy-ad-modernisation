resource "azuread_application" "modern_ad_sync" {
  display_name = "Legacy-AD-Modernisation-Sync"
  owners       = [var.current_user_object_id]

  required_resource_access {
    resource_app_id = "00000003-0000-0000-c000-000000000000" # Microsoft Graph

    resource_access {
      id   = "df021288-bdef-4463-88db-98f22de89214" # User.Read.All
      type = "Role"
    }

    resource_access {
      id   = "19dbc505-68ff-45ce-82f4-44b055375c32" # Directory.ReadWrite.All
      type = "Role"
    }
  }
}

resource "azuread_service_principal" "modern_ad_sp" {
  application_id               = azuread_application.modern_ad_sync.application_id
  app_role_assignment_required = false
  owners                       = [var.current_user_object_id]
}
