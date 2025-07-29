/**
 * Servicio para manejar los rankings de PvP y PK
 * 
 * ⚠️ TEMPORALMENTE DESHABILITADO:
 * - Las peticiones a la API están deshabilitadas
 * - Se usan datos por defecto para evitar errores
 * - Para habilitar: restaurar el código original en getTopPvP() y getTopPK()
 */
class RankingService {
  constructor() {
    this.baseUrl = 'https://api.l2terra.online'; // Ajustar según tu endpoint
    this.cache = {
      pvp: null,
      pk: null,
      lastUpdate: null
    };
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutos
  }

  /**
   * Obtiene el ranking de PvP (usando datos por defecto)
   * @returns {Promise<Array>} Array de jugadores con posición, nombre y puntuación
   */
  async getTopPvP() {
    // Usar datos por defecto temporalmente
    console.log('📊 Usando datos por defecto para PvP (API deshabilitada)');
    return this.getDefaultPvPRanking();
  }

  /**
   * Obtiene el ranking de PK (usando datos por defecto)
   * @returns {Promise<Array>} Array de jugadores con posición, nombre y puntuación
   */
  async getTopPK() {
    // Usar datos por defecto temporalmente
    console.log('📊 Usando datos por defecto para PK (API deshabilitada)');
    return this.getDefaultPKRanking();
  }

  /**
   * Actualiza ambos rankings en la interfaz
   */
  async updateRankings() {
    try {
      const [pvpData, pkData] = await Promise.all([
        this.getTopPvP(),
        this.getTopPK()
      ]);

      this.updatePvPTable(pvpData);
      this.updatePKTable(pkData);
    } catch (error) {
      console.error('Error actualizando rankings:', error);
    }
  }

  /**
   * Actualiza la tabla de PvP en el DOM
   * @param {Array} data - Array de jugadores
   */
  updatePvPTable(data) {
    const tbody = document.querySelector('.top-pvp tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    data.forEach(player => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${player.position}</td>
        <td>${player.name}</td>
        <td>${player.score.toLocaleString()}</td>
      `;
      tbody.appendChild(row);
    });
  }

  /**
   * Actualiza la tabla de PK en el DOM
   * @param {Array} data - Array de jugadores
   */
  updatePKTable(data) {
    const tbody = document.querySelector('.top-pk tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    data.forEach(player => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${player.position}</td>
        <td>${player.name}</td>
        <td>${player.score.toLocaleString()}</td>
      `;
      tbody.appendChild(row);
    });
  }

  /**
   * Datos por defecto para PvP (fallback)
   * @returns {Array} Array de jugadores por defecto
   */
  getDefaultPvPRanking() {
    return [
      { position: 1, name: "DragonSlayer", score: 1250 },
      { position: 2, name: "ShadowKnight", score: 1180 },
      { position: 3, name: "BloodWarrior", score: 1120 },
      { position: 4, name: "IronFist", score: 1050 },
      { position: 5, name: "ThunderLord", score: 980 },
      { position: 6, name: "FrostMage", score: 920 },
      { position: 7, name: "FireBlade", score: 870 },
      { position: 8, name: "StormRider", score: 820 },
      { position: 9, name: "DarkHunter", score: 780 },
      { position: 10, name: "LightBringer", score: 740 }
    ];
  }

  /**
   * Datos por defecto para PK (fallback)
   * @returns {Array} Array de jugadores por defecto
   */
  getDefaultPKRanking() {
    return [
      { position: 1, name: "DeathBringer", score: 890 },
      { position: 2, name: "ChaosLord", score: 820 },
      { position: 3, name: "VoidWalker", score: 780 },
      { position: 4, name: "NightStalker", score: 740 },
      { position: 5, name: "DemonSlayer", score: 690 },
      { position: 6, name: "ShadowReaper", score: 650 },
      { position: 7, name: "BloodThirst", score: 610 },
      { position: 8, name: "DarkSoul", score: 570 },
      { position: 9, name: "VoidMaster", score: 530 },
      { position: 10, name: "ChaosKnight", score: 490 }
    ];
  }

  /**
   * Limpia el cache para forzar una nueva actualización
   */
  clearCache() {
    this.cache.pvp = null;
    this.cache.pk = null;
    this.cache.lastUpdate = null;
  }
}

export default RankingService; 