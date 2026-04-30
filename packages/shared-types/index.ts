export enum IdentityType {
  USER = "USER",
  GROUP = "GROUP",
  SERVICE_ACCOUNT = "SERVICE_ACCOUNT",
  COMPUTER = "COMPUTER"
}

export enum ModernisationStatus {
  LEGACY = "LEGACY",
  HYBRID_SYNCED = "HYBRID_SYNCED",
  CLOUD_NATIVE = "CLOUD_NATIVE",
  DEPRECATED = "DEPRECATED"
}

export interface ADObject {
  id: string;
  distinguishedName: string;
  type: IdentityType;
  lastLogon?: string;
  isPrivileged: boolean;
  legacyProtocols: string[]; // e.g. NTLMv1, Kerberos-RC4
  status: ModernisationStatus;
}

export interface TrustRelationship {
  sourceDomain: string;
  targetDomain: string;
  trustType: "FOREST" | "EXTERNAL" | "SHORTCUT";
  direction: "ONE_WAY" | "TWO_WAY";
  isTransitive: boolean;
}

export interface SecurityRisk {
  id: string;
  category: "PROTOCOL" | "PERMISSION" | "GPO" | "ACCOUNT";
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  description: string;
  remediationPlan: string;
}
