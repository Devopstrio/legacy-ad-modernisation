# Architecture & Transformation Diagrams

## 11. Hybrid Identity Topology (Detailed)
*How the platform orchestrates identity between On-Prem AD and Entra ID.*

```mermaid
graph TD
    subgraph "On-Premises AD Forest"
        DC1[DC: primary.corp.local]
        DC2[DC: replica.corp.local]
    end
    subgraph "Hybrid Bridge"
        Sync[Entra ID Connect / Cloud Sync]
        Agent[AD Modernisation Agent]
    end
    subgraph "Cloud Identity (Entra ID)"
        Tenant[Production Tenant]
        Apps[Enterprise Applications]
    end
    DC1 --> Sync
    Sync --> Tenant
    DC1 --> Agent
    Agent --> Portal[AD Modernisation Hub]
    Tenant --> Apps
```

## 13. "Protocol Risk" Heatmap Model
```mermaid
graph LR
    P1[NTLMv1] --> High[Severity: Critical]
    P2[Kerberos-RC4] --> Med[Severity: High]
    P3[Kerberos-AES] --> Low[Severity: Low]
    High --> Score[Identity Risk Score]
    Med --> Score
    Low --> Score
```

## 20. Migration Runbook Execution Flow
```mermaid
stateDiagram-v2
    Assessment --> Cleanup: Remove Inactive Accounts
    Cleanup --> Mapping: Map to Cloud UPN
    Mapping --> Sync: Initial Sync to Entra ID
    Sync --> Validation: MFA & Policy Check
    Validation --> Cutover: Modern Auth Switch
    Cutover --> Success: Identity Modernised
```
