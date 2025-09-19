# Guía de Despliegue - AFH Metalmecánicos

## Configuración del Dominio

Tu docker-compose.yml ha sido configurado para el dominio `afhmetalmecanicos.com` con las siguientes características:

### Características implementadas:

1. **Traefik como proxy reverso** - Maneja el tráfico HTTP/HTTPS
2. **Certificados SSL automáticos** - Let's Encrypt para HTTPS
3. **Redirección automática** - HTTP → HTTPS
4. **Soporte para www** - Tanto `afhmetalmecanicos.com` como `www.afhmetalmecanicos.com`

### Servicios configurados:

- **traefik**: Proxy reverso principal
- **next-app**: Tu aplicación Next.js
- **traefik-redirect**: Middleware para redirección HTTPS

## Pasos para el despliegue:

### 1. Configurar variables de entorno
Crea un archivo `.env` con:
```bash
ENV_VARIABLE=production
NEXT_PUBLIC_ENV_VARIABLE=production
NEXT_PUBLIC_DOMAIN=afhmetalmecanicos.com
NEXT_PUBLIC_SITE_URL=https://afhmetalmecanicos.com
```

### 2. Configurar DNS
En tu proveedor de DNS, apunta tu dominio al servidor:
- **A Record**: `afhmetalmecanicos.com` → IP del servidor
- **CNAME**: `www.afhmetalmecanicos.com` → `afhmetalmecanicos.com`

### 3. Desplegar
```bash
# Construir y levantar los servicios
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Verificar estado
docker-compose ps
```

### 4. Verificar funcionamiento
- Visita: `https://afhmetalmecanicos.com`
- Verifica redirección: `http://afhmetalmecanicos.com` → `https://afhmetalmecanicos.com`
- Dashboard Traefik: `http://tu-servidor:8080`

### 5. Monitoreo
```bash
# Ver logs en tiempo real
docker-compose logs -f next-app

# Reiniciar servicios
docker-compose restart

# Actualizar aplicación
docker-compose up -d --build next-app
```

## Puertos expuestos:
- **80**: HTTP (redirige a HTTPS)
- **443**: HTTPS
- **8080**: Dashboard de Traefik (solo para administración)

## Notas importantes:
- Los certificados SSL se generan automáticamente
- El servicio se reinicia automáticamente si falla
- Los logs se mantienen en los contenedores
- El volumen `letsencrypt` persiste los certificados
